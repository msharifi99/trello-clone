import { Card, Column } from "@types";
import { boardContext } from "contexts/board";
import { useContext, useMemo } from "react";

function useCard(id: Card["id"]) {
  const { cardsById, editCard, removeCard, moveCard, columns } =
    useContext(boardContext);

  if (!cardsById[id]) throw new Error("Card does not exist");

  const parentColumn = useMemo(
    () =>
      columns.find(({ cardsId }) => cardsId.some((cardId) => cardId === id)),
    [columns, id]
  );

  if (!parentColumn)
    throw new Error("The given card does not belong to any column");

  return {
    card: cardsById[id],
    editCard: (updatedFields: Parameters<typeof editCard>[1]) =>
      editCard(id, updatedFields),
    removeCard: () => removeCard(id, parentColumn.id),
    moveCard: (targetColumnId: Column["id"]) =>
      moveCard(id, parentColumn.id, targetColumnId),
  };
}

export default useCard;
