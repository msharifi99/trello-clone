import styled from "@emotion/styled";
import Board from "components/Board";
import { mainContainerPadding } from "styles/variables";
import Header from "./components/Header";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 3.5rem 1fr;
`;

const StyledMain = styled.main`
  padding: ${mainContainerPadding.sm};
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
