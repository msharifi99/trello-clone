import styled from "@emotion/styled";
import { PropsWithChildren, ReactNode } from "react";
import { spacings } from "styles/variables";

const StyledSection = styled.section`
  padding: ${spacings.xs};
  border: 1px solid #000;
  border-radius: 2px;
  background-color: #dfe2e7;
`;

const StyledHeader = styled.header`
  margin-bottom: ${spacings.xs};
`;

const StyledDescriptionWrapper = styled.div`
  margin-bottom: ${spacings.sm};
`;

const StyledContent = styled.footer`
  margin-bottom: ${spacings.xs};
`;

export type CardTemplateProps = PropsWithChildren<{
  title: ReactNode;
  description: ReactNode;
  action: ReactNode;
}>;

function CardTemplate({
  title,
  description,
  action,
  children,
}: CardTemplateProps): JSX.Element {
  return (
    <StyledSection>
      <StyledHeader>{title}</StyledHeader>
      <StyledDescriptionWrapper>{description}</StyledDescriptionWrapper>
      <StyledContent>{children}</StyledContent>
      <footer>{action}</footer>
    </StyledSection>
  );
}

export default CardTemplate;
