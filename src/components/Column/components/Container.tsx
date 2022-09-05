import styled from "@emotion/styled";
import { ComponentProps, PropsWithChildren } from "react";
import { fontSizes, spacings } from "styles/variables";

const StyledContainer = styled.section`
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
  isEditing: boolean;
  columnTitle: string;
  columnTitleInputValue: string;
  onColumnTitleInputChange: ComponentProps<"input">["onChange"];
  onEditColumnClick: ComponentProps<"button">["onClick"];
  onSave: ComponentProps<"form">["onSubmit"];
}>;

function ColumnContainer({
  children,
  isEditing,
  columnTitle,
  columnTitleInputValue,
  onColumnTitleInputChange,
  onEditColumnClick,
  onSave,
}: ContainerProps) {
  return (
    <StyledContainer>
      <header>
        {!isEditing ? (
          <>
            <StyledTitle>{columnTitle}</StyledTitle>
            <button onClick={onEditColumnClick}>Edit Column</button>
          </>
        ) : (
          <form onSubmit={onSave}>
            <input
              value={columnTitleInputValue}
              onChange={onColumnTitleInputChange}
              autoFocus
            />
            <button type="submit">Save</button>
          </form>
        )}
      </header>

      {children}
    </StyledContainer>
  );
}

export default ColumnContainer;
