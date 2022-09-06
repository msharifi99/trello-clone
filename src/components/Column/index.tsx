import styled from "@emotion/styled";
import { Column as ColumnType } from "@types";
import Card from "components/Card";
import useColumn from "hooks/useColumn";
import { useState } from "react";
import { spacings } from "styles/variables";
import AddCardButton from "./components/AddCardButton";
import Column from "./components/Column";

const CardList = styled.ol`
  margin-bottom: ${spacings.sm};
`;

const CardListItem = styled.li`
  & + & {
    margin-top: ${spacings.xs};
  }
`;

type ColumnProps = {
  id: ColumnType["id"];
};

function ColumnContainer({ id }: ColumnProps): JSX.Element {
  const {
    column,
    editColumn,
    isEditing,
    setIsEditing,
    addCard,
    setEditingCard,
  } = useColumn(id);

  const [columnInputTitle, setColumnInputTitle] = useState(column.title);

  const handleEnterEditMode = () => {
    setColumnInputTitle(column.title);
    setIsEditing(true);
  };

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
    <Column
      columnTitle={column.title}
      isEditing={isEditing}
      columnTitleInputValue={columnInputTitle}
      onColumnTitleInputChange={(e) => setColumnInputTitle(e.target.value)}
      onEditColumnClick={handleEnterEditMode}
      onSave={handleColumnEdit}
    >
      <CardList>
        {column.cardsId.map((id) => (
          <CardListItem>
            <Card id={id} />
          </CardListItem>
        ))}
      </CardList>
      <AddCardButton onClick={handleAddCard} />
    </Column>
  );
}

export default ColumnContainer;
