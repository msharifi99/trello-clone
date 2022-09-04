import { boardContext } from "contexts/board";
import { useContext } from "react";

function useBoard() {
  const context = useContext(boardContext);
  return context;
}

export default useBoard;
