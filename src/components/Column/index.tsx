import styled from "@emotion/styled";
import { Column as ColumnType } from "@types";
import Card from "components/Card";
import useColumn from "hooks/useColumn";
import { useState } from "react";
import { spacings } from "styles/variables";
import AddCardButton from "./components/AddCardButton";
import ColumnContainer from "./components/Container";

const CardList = styled.ol`
  margin-bottom: ${spacings.sm};
`;

type ColumnProps = {
  id: ColumnType["id"];
};

function Column({ id }: ColumnProps): JSX.Element {
  const {
    column,
    editColumn,
    isEditing,
    setIsEditing,
    addCard,
    setEditingCard,
  } = useColumn(id);

  const [columnInputTitle, setColumnInputTitle] = useState(column.title);

  const handleColumnEdit = () => {
    editColumn({ title: columnInputTitle });
    setIsEditing(false);
  };

  const handleAddCard = () => {
    const card = addCard({
      description: "New Description",
      title: "New Title",
    });
    setEditingCard(card.id);
  };

  return (
    <ColumnContainer
      columnTitle={column.title}
      isEditing={isEditing}
      columnTitleInputValue={columnInputTitle}
      onColumnTitleInputChange={(e) => setColumnInputTitle(e.target.value)}
      onEditColumnClick={() => setIsEditing(true)}
      onSave={handleColumnEdit}
    >
      <CardList>
        {column.cardsId.map((id) => (
          <li>
            <Card id={id} />
          </li>
        ))}
      </CardList>
      <AddCardButton onClick={handleAddCard} />
    </ColumnContainer>
  );
}

export default Column;
