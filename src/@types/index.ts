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

export type { Card, Column };
