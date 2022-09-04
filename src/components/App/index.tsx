import styled from "@emotion/styled";
import Board from "components/Board";
import { spacings } from "styles/variables";
import Header from "./components/Header";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr;
`;

const StyledMain = styled.main`
  padding: ${spacings.md};
`;

function App() {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>
        <Board />
      </StyledMain>
    </StyledContainer>
  );
}

export default App;
