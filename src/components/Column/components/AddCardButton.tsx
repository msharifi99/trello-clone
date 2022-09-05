import styled from "@emotion/styled";
import { ComponentProps } from "react";

const StyledButton = styled.button`
  width: 100%;
`;

function AddCardButton(props: ComponentProps<"button">) {
  return <StyledButton {...props}>Add Card</StyledButton>;
}

export default AddCardButton;
