import { Card, CardWithoutId, Column, ColumnWithoutId } from "@types";

type PayloadsByActions = {
  ADD_CARD: Card & { parentColumnId: Column["id"] };
  EDIT_CARD: Partial<CardWithoutId> & { id: Card["id"] };
  REMOVE_CARD: { id: Card["id"]; parentColumnId: Column["id"] };
  MOVE_CARD: {
    id: Card["id"];
    sourceColumnId: Column["id"];
    targetColumnId: Column["id"];
  };
  ADD_COLUMN: Column;
  EDIT_COLUMN: Partial<ColumnWithoutId> & { id: Column["id"] };
};

type ActionTypes = keyof PayloadsByActions;

type Action = {
  [key in ActionTypes]: {
    type: key;
    payload: PayloadsByActions[key];
  };
}[ActionTypes];

type State = {
  columns: Column[];
  cardsById: Record<Card["id"], Card>;
};

export type { Action, State };
