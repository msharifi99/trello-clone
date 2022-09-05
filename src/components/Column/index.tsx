import { Column as ColumnType } from "@types";
import Card from "components/Card";
import useColumn from "hooks/useColumn";
import { useState } from "react";
import ColumnContainer from "./components/Container";

type ColumnProps = {
  id: ColumnType["id"];
};

function Column({ id }: ColumnProps): JSX.Element {
  const { column, editColumn, isEditing, setIsEditing } = useColumn(id);

  const [columnInputTitle, setColumnInputTitle] = useState(column.title);

  const handleColumnEdit = () => {
    editColumn({ title: columnInputTitle });
    setIsEditing(false);
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
      <ol>
        {column.cardsId.map((id) => (
          <li>
            <Card id={id} />
          </li>
        ))}
      </ol>
    </ColumnContainer>
  );
}

export default Column;
