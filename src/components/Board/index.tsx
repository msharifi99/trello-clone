import BoardContainer from "./components/BoardContainer";
import ColumnList from "./components/ColumnList";

function Board(): JSX.Element {
  return (
    <BoardContainer>
      <ColumnList />
    </BoardContainer>
  );
}

export default Board;
