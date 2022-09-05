import { boardContext } from "contexts/board";
import { useContext } from "react";

function useBoard() {
  const context = useContext(boardContext);
  if (!context) throw new Error("useBoard should be used under Board Context");
  return context;
}

export default useBoard;
