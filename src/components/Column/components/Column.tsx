import styled from "@emotion/styled";
import Input from "components/Input";
import { ComponentProps, PropsWithChildren } from "react";
import {
  breakpoints,
  columnWidth,
  fontSizes,
  spacings,
} from "styles/variables";

const StyledContainer = styled.section`
  width: ${columnWidth.sm};
  height: 100%;
  padding: ${spacings.sm};
  background-color: #f4f5f7;
  border: 1px solid black;
  border-radius: 2px;
  overflow: auto;

  @media (min-width: ${breakpoints.sm}) {
    width: ${columnWidth.md};
  }
`;

const StyledHeader = styled.header`
  margin-bottom: ${spacings.sm};
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.md};
  margin: 0;
`;

const StyledActionButton = styled.button`
  margin-top: ${spacings.xs};
`;

type ColumnProps = PropsWithChildren<{
  isEditing: boolean;
  columnTitle: string;
  columnTitleInputValue: string;
  onColumnTitleInputChange: ComponentProps<"input">["onChange"];
  onEditColumnClick: ComponentProps<"button">["onClick"];
  onSave: ComponentProps<"form">["onSubmit"];
}>;

function Column({
  children,
  isEditing,
  columnTitle,
  columnTitleInputValue,
  onColumnTitleInputChange,
  onEditColumnClick,
  onSave,
}: ColumnProps) {
  return (
    <StyledContainer>
      <StyledHeader>
        {!isEditing ? (
          <>
            <StyledTitle>{columnTitle}</StyledTitle>
            <StyledActionButton onClick={onEditColumnClick}>
              Edit
            </StyledActionButton>
          </>
        ) : (
          <form onSubmit={onSave}>
            <Input
              value={columnTitleInputValue}
              onChange={onColumnTitleInputChange}
              autoFocus
            />
            <StyledActionButton type="submit">Save</StyledActionButton>
          </form>
        )}
        <hr />
      </StyledHeader>

      {children}
    </StyledContainer>
  );
}

export default Column;
