import { Card, Column } from "@types";
import { boardContext } from "contexts/board";
import { useCallback, useContext, useMemo } from "react";

function useCard(id: Card["id"]) {
  const boardContextValues = useContext(boardContext);

  if (!boardContextValues)
    throw new Error("useCard should be used under Board Context");

  if (!boardContextValues.cardsById[id]) throw new Error("Card does not exist");

  const parentColumn = useMemo(
    () =>
      boardContextValues.columns.find(({ cardsId }) =>
        cardsId.some((cardId) => cardId === id)
      ),
    [boardContextValues.columns, id]
  );

  if (!parentColumn)
    throw new Error("The given card does not belong to any column");

  const editCard = useCallback(
    (updatedFields: Parameters<typeof boardContextValues.editCard>[1]) =>
      boardContextValues.editCard(id, updatedFields),
    [boardContextValues, id]
  );
  const removeCard = useCallback(
    () => boardContextValues.removeCard(id, parentColumn.id),
    [boardContextValues, id, parentColumn.id]
  );

  const moveCard = useCallback(
    (targetColumnId: Column["id"]) =>
      boardContextValues.moveCard(id, parentColumn.id, targetColumnId),
    [boardContextValues, id, parentColumn.id]
  );

  const setIsEditing = useCallback(
    (isEditing: boolean) => {
      boardContextValues.setEditingCardId(isEditing ? id : undefined);
    },
    [boardContextValues, id]
  );

  return {
    card: boardContextValues.cardsById[id],
    parentColumn,
    editCard,
    removeCard,
    moveCard,
    setIsEditing,
    isEditing: boardContextValues.editingCardId === id,
  };
}

export default useCard;
