import { Action, State } from "../@types";

function cardsByIdReducer(
  state: State["cardsById"],
  action: Action
): State["cardsById"] {
  switch (action.type) {
    case "ADD_CARD": {
      const { id, description, title } = action.payload;
      return {
        ...state,
        [id]: { id, description, title },
      };
    }
    case "EDIT_CARD": {
      const { id, ...updatedFileds } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          ...updatedFileds,
        },
      };
    }
    case "REMOVE_CARD": {
      const { id } = action.payload;
      const { [id]: omitted, ...rest } = state;

      return rest;
    }
    default: {
      return state;
    }
  }
}

export default cardsByIdReducer;
