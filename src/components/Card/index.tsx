import { Card as CardType } from "@types";
import useCard from "hooks/useCard";
import { ComponentProps, useState } from "react";
import ColumnsSelect from "./components/ColumnsSelect";
import CardContainer, { CardContainerProps } from "./components/Container";

type CardProps = {
  id: CardType["id"];
};

function Card({ id }: CardProps): JSX.Element {
  const {
    card,
    parentColumn,
    moveCard,
    editCard,
    removeCard,
    isEditing,
    setIsEditing,
  } = useCard(id);

  const [cardTitle, setTitleInput] = useState(card.title);
  const [cardDescription, setDescriptionInput] = useState(card.description);

  const handleMoveCard: ComponentProps<"select">["onChange"] = (e) => {
    moveCard(e.target.value);
  };

  const handleEditCard = () => {
    editCard({ description: cardDescription, title: cardTitle });
    setIsEditing(false);
  };

  const handleOnInputChange: CardContainerProps["onInputChange"] = (
    inputName,
    e
  ) => {
    if (inputName === "title") {
      setTitleInput(e.target.value);
      return;
    }

    if (inputName === "description") {
      setDescriptionInput(e.target.value);
      return;
    }
  };

  return (
    <CardContainer
      cardDescription={card.description}
      cardTitle={card.title}
      inputValues={{ title: cardTitle, description: cardDescription }}
      isEditing={isEditing}
      onEditButtonClick={() => setIsEditing(true)}
      onInputChange={handleOnInputChange}
      onRemove={removeCard}
      onSave={handleEditCard}
    >
      <ColumnsSelect
        excludeColumn={parentColumn.id}
        onColumnChange={handleMoveCard}
      />
    </CardContainer>
  );
}

export default Card;
