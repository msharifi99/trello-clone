import styled from "@emotion/styled";
import { ChangeEvent, ComponentProps, PropsWithChildren } from "react";
import { fontSizes, spacings } from "styles/variables";

const StyledSection = styled.section`
  padding: ${spacings.xs};
  border: 1px solid #000;
  border-radius: 2px;
  background-color: #dfe2e7;
`;

const StyledHeader = styled.header`
  margin-bottom: ${spacings.xs};
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.md};
  font-weight: bold;
`;

const StyledDescriptionWrapper = styled.div`
  margin-bottom: ${spacings.sm};
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.md};
`;

const StyledContent = styled.footer`
  margin-bottom: ${spacings.xs};
`;

const StyledActionButton = styled.button`
  & + & {
    margin-left: ${spacings.xs};
  }
`;

export type CardContainerProps = PropsWithChildren<{
  cardTitle: string;
  cardDescription: string;
  isEditing: boolean;
  inputValues: {
    title: string;
    description: string;
  };
  onInputChange: (
    inputName: keyof CardContainerProps["inputValues"],
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  onEditButtonClick: ComponentProps<"button">["onClick"];
  onSave: ComponentProps<"button">["onClick"];
  onRemove: ComponentProps<"button">["onClick"];
}>;

function CardContainer({
  cardTitle,
  cardDescription,
  isEditing,
  onEditButtonClick,
  onInputChange,
  onRemove,
  onSave,
  inputValues,
  children,
}: CardContainerProps): JSX.Element {
  return (
    <StyledSection>
      <StyledHeader>
        {!isEditing ? (
          <StyledTitle>{cardTitle}</StyledTitle>
        ) : (
          <input
            name="title"
            value={inputValues.title}
            onChange={(e) => onInputChange("title", e)}
          />
        )}
      </StyledHeader>
      <StyledDescriptionWrapper>
        {!isEditing ? (
          <StyledDescription>{cardDescription}</StyledDescription>
        ) : (
          <input
            name="description"
            value={inputValues.description}
            onChange={(e) => onInputChange("description", e)}
          />
        )}
      </StyledDescriptionWrapper>
      <StyledContent>{children}</StyledContent>
      <footer>
        {!isEditing ? (
          <StyledActionButton onClick={onEditButtonClick}>
            Edit
          </StyledActionButton>
        ) : (
          <StyledActionButton onClick={onSave}>Save</StyledActionButton>
        )}
        <StyledActionButton onClick={onRemove}>Remove</StyledActionButton>
      </footer>
    </StyledSection>
  );
}

export default CardContainer;
