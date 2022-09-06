import { Card as CardType } from "@types";
import useCard from "hooks/useCard";
import { ComponentProps, useState } from "react";
import ColumnsSelect from "./components/ColumnsSelect";
import Card from "./components/Card";
import CardForm, { CardFormProps } from "./components/CardForm";

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

  const [titleInput, setTitleInput] = useState(card.title);
  const [descriptionInput, setDescriptionInput] = useState(card.description);

  const handleMoveCard: ComponentProps<"select">["onChange"] = (e) => {
    moveCard(e.target.value);
  };

  const handleEnterEditMode = () => {
    setTitleInput(card.title);
    setDescriptionInput(card.description);
    setIsEditing(true);
  };

  const handleEditCard = () => {
    editCard({ description: descriptionInput, title: titleInput });
    setIsEditing(false);
  };

  const handleOnInputChange: CardFormProps["onInputChange"] = (
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

  const columnSelect = (
    <ColumnsSelect
      excludeColumn={parentColumn.id}
      onColumnChange={handleMoveCard}
    />
  );

  if (isEditing) {
    return (
      <CardForm
        inputValues={{ description: descriptionInput, title: titleInput }}
        onInputChange={handleOnInputChange}
        onRemove={removeCard}
        onSave={handleEditCard}
      >
        {columnSelect}
      </CardForm>
    );
  }

  return (
    <Card
      description={card.description}
      title={card.title}
      onEdit={handleEnterEditMode}
      onRemove={removeCard}
    >
      {columnSelect}
    </Card>
  );
}

export default CardContainer;
