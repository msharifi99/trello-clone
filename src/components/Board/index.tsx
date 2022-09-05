import useBoard from "hooks/useBoard";
import { ComponentProps } from "react";
import BoardContainer from "./components/BoardContainer";
import ColumnList from "./components/ColumnList";

function Board(): JSX.Element {
  const { addColumn, setEditingColumnId } = useBoard();

  const handleAddColumn: ComponentProps<"button">["onClick"] = () => {
    const column = addColumn({ cardsId: [], title: "New Column" });
    setEditingColumnId(column.id);
  };

  return (
    <BoardContainer>
      <ColumnList />
      <button onClick={handleAddColumn}>Add Column</button>
    </BoardContainer>
  );
}

export default Board;
