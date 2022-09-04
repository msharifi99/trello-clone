import { Column } from "@types";
import { boardContext } from "contexts/board";
import { useContext } from "react";
import findItemByProperty from "utils/findItemByProperty";

function useColumn(id: Column["id"]) {
  const { columns, editColumn, addCard } = useContext(boardContext);

  const column = findItemByProperty("id", id, columns);
  if (!column) throw new Error("Column not found");

  return {
    column,
    editColumn: (updatedFields: Parameters<typeof editColumn>[1]) =>
      editColumn(id, updatedFields),
    addCard: (card: Parameters<typeof addCard>[0]) => addCard(card, id),
  };
}

export default useColumn;
