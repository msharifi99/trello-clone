import useBoard from "hooks/useBoard";
import { ComponentProps } from "react";
import BoardContainer from "./components/Container";
import ColumnList from "./components/ColumnList";
import styled from "@emotion/styled";
import { spacings } from "styles/variables";

const StyledColumnList = styled(ColumnList)`
  margin-right: ${spacings.sm};
`;

function Board(): JSX.Element {
  const { addColumn, setEditingColumnId } = useBoard();

  const handleAddColumn: ComponentProps<"button">["onClick"] = () => {
    const column = addColumn({ cardsId: [], title: "New Column" });
    setEditingColumnId(column.id);
  };

  return (
    <BoardContainer>
      <StyledColumnList />
      <button onClick={handleAddColumn}>Add Column</button>
    </BoardContainer>
  );
}

export default Board;
