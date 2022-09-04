import styled from "@emotion/styled";
import { spacings } from "styles/variables";
import ColumnList from "./ColumnList";

const StyledColumnList = styled(ColumnList)`
  margin-left: ${spacings.md};
`;

function Board(): JSX.Element {
  return (
    <article>
      <header>
        <h2>Test Board</h2>
      </header>
      <StyledColumnList />
    </article>
  );
}

export default Board;
