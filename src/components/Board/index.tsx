import useBoard from "hooks/useBoard";
import { ComponentProps } from "react";
import Board from "./components/Board";
import ColumnList from "./components/ColumnList";
import styled from "@emotion/styled";
import { spacings } from "styles/variables";
import AddColumnButton from "./components/AddColumnButton";

const StyledColumnList = styled(ColumnList)`
  margin-right: ${spacings.sm};
`;

function BoardContainer(): JSX.Element {
  const { addColumn, setEditingColumnId, columns } = useBoard();

  const handleAddColumn: ComponentProps<"button">["onClick"] = () => {
    const column = addColumn({ cardsId: [], title: "New Column" });
    setEditingColumnId(column.id);
  };

  return (
    <Board>
      {Boolean(columns.length) && <StyledColumnList columns={columns} />}
      <AddColumnButton onClick={handleAddColumn} />
    </Board>
  );
}

export default BoardContainer;
