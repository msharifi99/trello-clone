import { Column } from "@types";
import { boardContext } from "contexts/board";
import { useCallback, useContext } from "react";
import findItemByProperty from "utils/findItemByProperty";

function useColumn(id: Column["id"]) {
  const boardContextValues = useContext(boardContext);

  if (!boardContextValues)
    throw new Error("useColumn should be used under Board Context");

  const column = findItemByProperty("id", id, boardContextValues.columns);
  if (!column) throw new Error("Column not found");

  const editColumn = useCallback(
    (updatedFields: Parameters<typeof boardContextValues.editColumn>[1]) =>
      boardContextValues.editColumn(id, updatedFields),
    [boardContextValues, id]
  );

  const addCard = useCallback(
    (card: Parameters<typeof boardContextValues.addCard>[0]) =>
      boardContextValues.addCard(card, id),
    [boardContextValues, id]
  );

  const setIsEditing = useCallback(
    (isEditing: boolean) => {
      boardContextValues.setEditingColumnId(isEditing ? id : undefined);
    },
    [boardContextValues, id]
  );

  return {
    column,
    editColumn,
    addCard,
    setIsEditing,
    isEditing: boardContextValues.editingColumnId === id,
    setEditingCard: boardContextValues.setEditingCardId,
  };
}

export default useColumn;
