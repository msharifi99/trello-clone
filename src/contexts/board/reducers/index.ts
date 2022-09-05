import { Action, State } from "../@types";
import cardsByIdReducer from "./cardsByIdReducer";
import columnReducer from "./columnReducer";

function mainReducer(state: State, action: Action) {
  const newColumns = columnReducer(state.columns, action);
  const newCardsById = cardsByIdReducer(state.cardsById, action);

  return {
    columns: newColumns,
    cardsById: newCardsById,
  };
}

export default mainReducer;
