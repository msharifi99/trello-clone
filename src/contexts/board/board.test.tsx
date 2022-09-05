import { renderHook } from "@testing-library/react";
import { useContext } from "react";
import { act } from "react-dom/test-utils";
import findItemByProperty from "utils/findItemByProperty";
import BoardProvider, { boardContext } from "./index";

function renderBoardContextHook() {
  return renderHook(
    () => {
      const boardContextValues = useContext(boardContext);
      if (!boardContextValues)
        throw new Error(
          "useContext should be used under Board context provider"
        );

      return boardContextValues;
    },
    {
      wrapper: BoardProvider,
    }
  );
}

test("add column with provided information", () => {
  const { result } = renderBoardContextHook();
  const currentColumnsCount = result.current.columns.length;

  const columnTitle = "Dummy Column";
  act(() => {
    result.current.addColumn({ cardsId: [], title: columnTitle });
  });

  expect(result.current.columns.length).toBe(currentColumnsCount + 1);
  const addedColumn = result.current.columns.find(
    ({ title }) => title === columnTitle
  );

  expect(addedColumn).toBeDefined();
});

test("edit column with new information", async () => {
  const { result } = renderBoardContextHook();

  const columnTitle = "Dummy Column";

  act(() => {
    result.current.addColumn({ cardsId: [], title: columnTitle });
  });

  const addedColumn = findItemByProperty(
    "title",
    columnTitle,
    result.current.columns
  );

  const columnsCount = result.current.columns.length;
  const newColumnTitle = "New Dummy Column";

  act(() => {
    result.current.editColumn(addedColumn!.id, { title: newColumnTitle });
  });

  const editedColumn = findItemByProperty(
    "title",
    newColumnTitle,
    result.current.columns
  );
  const oldColumn = findItemByProperty(
    "title",
    columnTitle,
    result.current.columns
  );

  expect(result.current.columns.length).toBe(columnsCount);
  expect(editedColumn).toBeDefined();
  expect(oldColumn).not.toBeDefined();
});

test("add Card to the column", () => {
  const { result } = renderBoardContextHook();

  const columnTitle = "Dummy Column";

  act(() => {
    result.current.addColumn({ cardsId: [], title: columnTitle });
  });

  const column = findItemByProperty(
    "title",
    columnTitle,
    result.current.columns
  );

  const cardTitle = "Dummy Title";
  act(() => {
    result.current.addCard(
      { title: cardTitle, description: "Dummy Description" },
      column!.id
    );
  });

  const addedCard = findItemByProperty(
    "title",
    cardTitle,
    Object.values(result.current.cardsById)
  );

  expect(addedCard).toBeDefined();
});
