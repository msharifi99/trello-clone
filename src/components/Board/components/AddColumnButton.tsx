import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { breakpoints, columnWidth, fontSizes } from "styles/variables";

const StyledButton = styled.button`
  width: ${columnWidth.sm};
  display: block;
  font-size: ${fontSizes.md};

  @media (min-width: ${breakpoints.sm}) {
    width: ${columnWidth.md};
  }
`;

type AddColumnButtonProps = ComponentProps<"button">;

function AddColumnButton(props: AddColumnButtonProps) {
  return <StyledButton {...props}>Add Column</StyledButton>;
}

export default AddColumnButton;
