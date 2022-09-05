import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { fontSizes, mainContainerPadding } from "styles/variables";

const StyledButton = styled.button`
  width: calc(100vw - ${mainContainerPadding.sm} * 2);
  display: block;
  font-size: ${fontSizes.md};
`;

type AddColumnButtonProps = ComponentProps<"button">;

function AddColumnButton(props: AddColumnButtonProps) {
  return <StyledButton {...props}>Add Column</StyledButton>;
}

export default AddColumnButton;
