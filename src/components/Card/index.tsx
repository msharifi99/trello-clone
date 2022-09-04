import { Card as CardType } from "@types";
import useCard from "hooks/useCard";

type CardProps = {
  id: CardType["id"];
};

function Card({ id }: CardProps): JSX.Element {
  const { card } = useCard(id);

  return (
    <section>
      <header>
        <h2>{card.title}</h2>
      </header>
      <p>{card.description}</p>
    </section>
  );
}

export default Card;
