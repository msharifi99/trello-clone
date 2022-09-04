import styled from "@emotion/styled";
import { spacings, fontSizes } from "styles/variables";

const StyledHeader = styled.header`
  height: 100%;
  padding: ${spacings.sm};
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${fontSizes.lg};
  font-weight: bold;
`;

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <StyledTitle>Trello Clone</StyledTitle>
    </StyledHeader>
  );
}

export default Header;
