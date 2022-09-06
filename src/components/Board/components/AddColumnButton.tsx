import styled from "@emotion/styled";
import Button from "components/Button";
import { ComponentProps } from "react";
import { breakpoints, columnWidth, fontSizes } from "styles/variables";

const StyledButton = styled(Button)`
  width: ${columnWidth.sm};
  height: 4rem;
  flex-shrink: 0;
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
