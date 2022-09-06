import styled from "@emotion/styled";
import Button from "components/Button";
import { ComponentProps } from "react";

const StyledButton = styled(Button)`
  width: 100%;
`;

function AddCardButton(props: ComponentProps<"button">) {
  return <StyledButton {...props}>Add Card</StyledButton>;
}

export default AddCardButton;
