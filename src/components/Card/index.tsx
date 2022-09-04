import { Card as CardType } from "@types";

type CardProps = {
  id: CardType["id"];
};

function Card({ id }: CardProps): JSX.Element {
  return <section>Card {id}</section>;
}

export default Card;
