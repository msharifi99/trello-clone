import styled from "@emotion/styled";
import { spacings } from "styles/variables";

const Button = styled.button`
  padding: ${spacings.xxs} ${spacings.xs};
  background-color: #0089eb;
  color: #fff;
  border: 1px solid #0074c7;
  border-radius: 5px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #0074c7;
  }
`;

export default Button;
