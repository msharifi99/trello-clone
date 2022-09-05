import styled from "@emotion/styled";
import {
  breakpoints,
  headerHeight,
  mainContainerPadding,
  spacings,
} from "styles/variables";
import ColumnList from "./components/ColumnList";

const boardHeaderHeight = "2rem";
const StyledColumnList = styled(ColumnList)`
  height: calc(
    100vh - ${headerHeight.sm} - ${boardHeaderHeight} -
      ${mainContainerPadding.sm} * 2
  );

  @media (min-width: ${breakpoints.sm}) {
    margin-left: ${spacings.md};
  }
`;

const StyledTitle = styled.h2`
  margin: 0;
`;

const StyledHeader = styled.header`
  height: ${boardHeaderHeight};
`;

function Board(): JSX.Element {
  return (
    <article>
      <StyledHeader>
        <StyledTitle>Test Board</StyledTitle>
      </StyledHeader>
      <StyledColumnList />
    </article>
  );
}

export default Board;
