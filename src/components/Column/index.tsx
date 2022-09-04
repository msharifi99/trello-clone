import { Column as ColumnType } from "@types";

type ColumnProps = {
  id: ColumnType["id"];
};

function Column({ id }: ColumnProps): JSX.Element {
  return <section>Column {id}</section>;
}

export default Column;
