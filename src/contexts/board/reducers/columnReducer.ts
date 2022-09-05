import { Column } from "@types";
import findItemByProperty from "utils/findItemByProperty";
import { Action, State } from "../@types";

function columnReducer(
  state: State["columns"],
  action: Action
): State["columns"] {
  switch (action.type) {
    case "ADD_CARD": {
      const { id, parentColumnId } = action.payload;
      const column = findItemByProperty("id", parentColumnId, state);

      if (!column) throw new Error("Column not found");

      const newColumn = {
        ...column,
        cardsId: column.cardsId.concat(id),
      };

      return state.map((currentColumn) =>
        currentColumn.id === column.id ? newColumn : currentColumn
      );
    }

    case "MOVE_CARD": {
      const { id, sourceColumnId, targetColumnId } = action.payload;

      const sourceColumn = findItemByProperty("id", sourceColumnId, state);
      if (!sourceColumn) throw new Error("Source column not found");

      const targetColumn = findItemByProperty("id", targetColumnId, state);
      if (!targetColumn) throw new Error("Target column not found");

      const newSourceColumn: Column = {
        ...sourceColumn,
        cardsId: sourceColumn.cardsId.filter((cardId) => cardId !== id),
      };

      const newTargetColumn: Column = {
        ...targetColumn,
        cardsId: targetColumn.cardsId.concat(id),
      };

      return state.map((column) => {
        if (column.id === sourceColumnId) return newSourceColumn;
        if (column.id === targetColumn.id) return newTargetColumn;
        return column;
      });
    }

    case "REMOVE_CARD": {
      const { id, parentColumnId } = action.payload;

      const parentColumn = findItemByProperty("id", parentColumnId, state);
      if (!parentColumn) throw new Error("Parent column not found");

      const newParentColumn: Column = {
        ...parentColumn,
        cardsId: parentColumn.cardsId.filter((cardId) => cardId !== id),
      };

      return state.map((column) =>
        column.id === parentColumnId ? newParentColumn : column
      );
    }

    case "ADD_COLUMN": {
      const { id, cardsId, title } = action.payload;
      return state.concat({ id, cardsId, title });
    }

    case "EDIT_COLUMN": {
      const { id, ...updatedFields } = action.payload;

      const column = findItemByProperty("id", id, state);
      if (!column) throw new Error("Column not found");

      return state.map((currentColumn) =>
        currentColumn.id === column.id
          ? { ...column, ...updatedFields }
          : currentColumn
      );
    }
    default: {
      return state;
    }
  }
}

export default columnReducer;
