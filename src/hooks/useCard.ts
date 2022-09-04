import { Card, Column } from "@types";
import { boardContext } from "contexts/board";
import { useCallback, useContext, useMemo } from "react";

function useCard(id: Card["id"]) {
  const boardContextValues = useContext(boardContext);

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

  return {
    card: boardContextValues.cardsById[id],
    editCard,
    removeCard,
    moveCard,
  };
}

export default useCard;
