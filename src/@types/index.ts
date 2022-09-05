type Card = {
  id: string;
  title: string;
  description: string;
};

type Column = {
  id: string;
  title: string;
  cardsId: Card["id"][];
};

type CardWithoutId = Omit<Card, "id">;

type ColumnWithoutId = Omit<Column, "id">;

export type { Card, Column, CardWithoutId, ColumnWithoutId };
