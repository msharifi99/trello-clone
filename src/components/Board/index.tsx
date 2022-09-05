import useBoard from "hooks/useBoard";
import { ComponentProps } from "react";
import BoardContainer from "./components/Container";
import ColumnList from "./components/ColumnList";
import styled from "@emotion/styled";
import { spacings } from "styles/variables";
import AddColumnButton from "./components/AddColumnButton";

const StyledColumnList = styled(ColumnList)`
  margin-right: ${spacings.sm};
`;

function Board(): JSX.Element {
  const { addColumn, setEditingColumnId, columns } = useBoard();

  const handleAddColumn: ComponentProps<"button">["onClick"] = () => {
    const column = addColumn({ cardsId: [], title: "New Column" });
    setEditingColumnId(column.id);
  };

  return (
    <BoardContainer>
      {Boolean(columns.length) && <StyledColumnList columns={columns} />}
      <AddColumnButton onClick={handleAddColumn} />
    </BoardContainer>
  );
}

export default Board;
