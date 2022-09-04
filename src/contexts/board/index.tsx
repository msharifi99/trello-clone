import { Card, Column } from "@types";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import findItemByProperty from "utils/findItemByProperty";

type BoardContext = {
  columns: Column[];
  cardsById: Record<Card["id"], Card>;
  addCard: (card: CardWithoutId, columnId: Column["id"]) => void;
  editCard: (id: Card["id"], updatedFields: Partial<CardWithoutId>) => void;
  moveCard: (
    id: Card["id"],
    sourceColumnId: Column["id"],
    targetColumnId: Column["id"]
  ) => void;
  removeCard: (id: Card["id"], parentColumnId: Column["id"]) => void;
  addColumn: (column: Omit<Column, "id">) => void;
  editColumn: (
    id: Column["id"],
    updatedFields: Partial<ColumnWithoutId>
  ) => void;
};

type CardWithoutId = Omit<Card, "id">;
type ColumnWithoutId = Omit<Column, "id">;

const noop = () => {};
const boardContext = createContext<BoardContext>({
  columns: [],
  cardsById: {},
  addCard: noop,
  editCard: noop,
  moveCard: noop,
  removeCard: noop,
  addColumn: noop,
  editColumn: noop,
});

type BoardProviderProps = {
  children: ReactNode;
};
function BoardProvider({ children }: BoardProviderProps): JSX.Element {
  const [columns, setColumns] = useState<BoardContext["columns"]>([]);
  const [cardsById, setCardsById] = useState<BoardContext["cardsById"]>({});

  const addCard: BoardContext["addCard"] = useCallback((card, columnId) => {
    const id = `card_${Date.now()}`;
    setCardsById((previousCards) => ({
      ...previousCards,
      [id]: { id, ...card },
    }));

    setColumns((previousColumns) => {
      const column = findItemByProperty("id", columnId, previousColumns);

      if (!column) throw new Error("Column not found");

      const newColumn = { ...column, cardsId: column.cardsId.concat(id) };

      return previousColumns.map((currentColumn) =>
        currentColumn.id === column.id ? newColumn : currentColumn
      );
    });
  }, []);

  const editCard: BoardContext["editCard"] = useCallback(
    (id, updatedFields) => {
      if (!cardsById[id]) throw new Error("Card not found");
      setCardsById((previousCards) => ({
        ...previousCards,
        [id]: {
          ...previousCards[id],
          ...updatedFields,
        },
      }));
    },
    [cardsById]
  );

  const moveCard: BoardContext["moveCard"] = useCallback(
    (id, sourceColumnId, targetColumnId) => {
      if (sourceColumnId === targetColumnId) return;

      setColumns((previousColumns) => {
        const sourceColumn = findItemByProperty(
          "id",
          sourceColumnId,
          previousColumns
        );
        if (!sourceColumn) throw new Error("Source column not found");

        const targetColumn = findItemByProperty(
          "id",
          targetColumnId,
          previousColumns
        );
        if (!targetColumn) throw new Error("Target column not found");

        const newSourceColumn: Column = {
          ...sourceColumn,
          cardsId: sourceColumn.cardsId.filter((cardId) => cardId !== id),
        };

        const newTargetColumn: Column = {
          ...targetColumn,
          cardsId: targetColumn.cardsId.concat(id),
        };

        return previousColumns.map((column) => {
          if (column.id === sourceColumnId) return newSourceColumn;
          if (column.id === targetColumn.id) return newTargetColumn;
          return column;
        });
      });
    },
    []
  );

  const removeCard: BoardContext["removeCard"] = useCallback(
    (id, parentColumnId) => {
      setColumns((previousColumns) => {
        const parentColumn = findItemByProperty("id", id, previousColumns);
        if (!parentColumn) throw new Error("Parent column not found");

        const newParentColumn: Column = {
          ...parentColumn,
          cardsId: parentColumn.cardsId.filter((cardId) => cardId !== id),
        };

        return previousColumns.map((column) =>
          column.id === parentColumnId ? newParentColumn : column
        );
      });
    },
    []
  );

  const addColumn: BoardContext["addColumn"] = useCallback((column) => {
    const id = `column_${Date.now()}`;
    setColumns((previousColumns) => previousColumns.concat({ id, ...column }));
  }, []);

  const editColumn: BoardContext["editColumn"] = useCallback(
    (id, updatedFields) => {
      const column = findItemByProperty("id", id, columns);
      if (!column) throw new Error("Column not found");

      setColumns((previousColumns) =>
        previousColumns.map((currentColumn) =>
          currentColumn.id === column.id
            ? { ...column, ...updatedFields }
            : currentColumn
        )
      );
    },
    [columns]
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
    }),
    [
      cardsById,
      columns,
      addCard,
      addColumn,
      editCard,
      editColumn,
      moveCard,
      removeCard,
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
