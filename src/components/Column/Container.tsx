import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { spacings, fontSizes } from "styles/variables";

const StyledContainer = styled.section`
  width: calc(100vw - ${spacings.md} * 2);
  height: 100%;
  padding: ${spacings.sm};
  background-color: #ebecf0;
  border-radius: 5px;
  overflow: auto;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.md};
  margin: 0;
`;

type ContainerProps = PropsWithChildren<{
  title: string;
}>;

function Container({ title, children }: ContainerProps) {
  return (
    <StyledContainer>
      <header>
        <StyledTitle>{title}</StyledTitle>
      </header>

      {children}
    </StyledContainer>
  );
}

export default Container;
