import { Card as CardType } from "@types";
import useCard from "hooks/useCard";
import { ComponentProps, useState } from "react";
import ColumnsSelect from "./components/ColumnsSelect";
import Card, { CardProps } from "./components/Card";

type CardContainerProps = {
  id: CardType["id"];
};

function CardContainer({ id }: CardContainerProps): JSX.Element {
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

  const handleOnInputChange: CardProps["onInputChange"] = (inputName, e) => {
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
    <Card
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
    </Card>
  );
}

export default CardContainer;
