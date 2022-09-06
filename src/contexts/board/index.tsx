import { Card, CardWithoutId, Column, ColumnWithoutId } from "@types";
import useLocalStorage from "hooks/useLocalStorage";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { State } from "./@types";
import mainReducer from "./reducers";

type BoardContext = {
  columns: Column[];
  cardsById: Record<Card["id"], Card>;
  addCard: (card: CardWithoutId, columnId: Column["id"]) => Card;
  editCard: (id: Card["id"], updatedFields: Partial<CardWithoutId>) => void;
  moveCard: (
    id: Card["id"],
    sourceColumnId: Column["id"],
    targetColumnId: Column["id"]
  ) => void;
  removeCard: (id: Card["id"], parentColumnId: Column["id"]) => void;
  addColumn: (column: Omit<Column, "id">) => Column;
  editColumn: (
    id: Column["id"],
    updatedFields: Partial<ColumnWithoutId>
  ) => void;
  editingColumnId: Column["id"] | undefined;
  setEditingColumnId: (id: BoardContext["editingColumnId"]) => void;
  editingCardId: Card["id"] | undefined;
  setEditingCardId: (id: BoardContext["editingCardId"]) => void;
};

const boardContext = createContext<BoardContext | null>(null);

type BoardProviderProps = {
  children: ReactNode;
};

function BoardProvider({ children }: BoardProviderProps): JSX.Element {
  const { set: persistBoardState, get: getPersistedBoardState } =
    useLocalStorage<State>("board-state");

  const initialState = getPersistedBoardState() || {
    columns: [],
    cardsById: {},
  };

  const [{ columns, cardsById }, dispatch] = useReducer(
    mainReducer,
    initialState
  );

  useEffect(() => {
    persistBoardState({ cardsById, columns });
  }, [columns, cardsById, persistBoardState]);

  const [editingColumnId, setEditingColumnId] =
    useState<BoardContext["editingColumnId"]>();

  const [editingCardId, setEditingCardId] =
    useState<BoardContext["editingColumnId"]>();

  const addCard: BoardContext["addCard"] = useCallback((card, columnId) => {
    const id = `card_${Date.now()}`;
    const newCard = {
      id,
      ...card,
    };

    dispatch({
      type: "ADD_CARD",
      payload: {
        ...newCard,
        parentColumnId: columnId,
      },
    });

    setEditingColumnId(undefined);
    setEditingCardId(undefined);

    return newCard;
  }, []);

  const editCard: BoardContext["editCard"] = useCallback(
    (id, updatedFields) => {
      if (!cardsById[id]) throw new Error("Card not found");
      dispatch({ type: "EDIT_CARD", payload: { id, ...updatedFields } });
    },
    [cardsById]
  );

  const moveCard: BoardContext["moveCard"] = useCallback(
    (id, sourceColumnId, targetColumnId) => {
      if (sourceColumnId === targetColumnId) return;
      dispatch({
        type: "MOVE_CARD",
        payload: { id, sourceColumnId, targetColumnId },
      });
    },
    []
  );

  const removeCard: BoardContext["removeCard"] = useCallback(
    (id, parentColumnId) => {
      dispatch({
        type: "REMOVE_CARD",
        payload: {
          id,
          parentColumnId,
        },
      });
    },
    []
  );

  const addColumn: BoardContext["addColumn"] = useCallback((column) => {
    const id = `column_${Date.now()}`;
    const newColumn = { id, ...column };
    dispatch({ type: "ADD_COLUMN", payload: newColumn });

    return newColumn;
  }, []);

  const editColumn: BoardContext["editColumn"] = useCallback(
    (id, updatedFields) => {
      dispatch({ type: "EDIT_COLUMN", payload: { id, ...updatedFields } });
    },
    []
  );

  const contextValue: BoardContext = useMemo(
    () => ({
      columns,
      cardsById,
      addCard,
      editCard,
      moveCard,
      removeCard,
      addColumn,
      editColumn,
      setEditingColumnId,
      editingColumnId,
      editingCardId,
      setEditingCardId,
    }),
    [
      columns,
      cardsById,
      addCard,
      editCard,
      moveCard,
      removeCard,
      addColumn,
      editColumn,
      editingColumnId,
      editingCardId,
    ]
  );

  return (
    <boardContext.Provider value={contextValue}>
      {children}
    </boardContext.Provider>
  );
}

export default BoardProvider;
export { boardContext };
export type { BoardContext };
