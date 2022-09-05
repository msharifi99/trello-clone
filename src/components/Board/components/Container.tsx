import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { headerHeight, mainContainerPadding } from "styles/variables";

const boardHeaderHeight = "2rem";
const StyledHeader = styled.header`
  height: ${boardHeaderHeight};
`;

const StyledContentContainer = styled.div`
  height: calc(
    100vh - ${headerHeight.sm} - ${boardHeaderHeight} -
      ${mainContainerPadding.sm} * 2
  );

  display: flex;
`;

const StyledTitle = styled.h2`
  margin: 0;
`;

type BoardContainerProps = PropsWithChildren<{}>;

function BoardContainer({ children }: BoardContainerProps): JSX.Element {
  return (
    <article>
      <StyledHeader>
        <StyledTitle>Test Board</StyledTitle>
      </StyledHeader>
      <StyledContentContainer>{children}</StyledContentContainer>
    </article>
  );
}

export default BoardContainer;
