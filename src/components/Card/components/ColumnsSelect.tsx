import { Column } from "@types";
import useBoard from "hooks/useBoard";
import { ComponentProps } from "react";

type ColumnSelectProps = {
  excludeColumn: Column["id"];
  onColumnChange: ComponentProps<"select">["onChange"];
};

function ColumnsSelect({
  excludeColumn,
  onColumnChange,
}: ColumnSelectProps): JSX.Element {
  const { columns } = useBoard();

  return (
    <select onChange={onColumnChange} value={-1}>
      <option disabled value={-1}>
        {columns.length > 1 ? "Select to move" : "No column available"}
      </option>
      {columns
        .filter(({ id }) => id !== excludeColumn)
        .map(({ title, id }) => (
          <option value={id} key={id}>
            {title}
          </option>
        ))}
    </select>
  );
}

export default ColumnsSelect;
