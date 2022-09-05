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

export type { Card, Column, CardWithoutId };
