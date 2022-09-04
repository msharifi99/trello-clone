import { Column as ColumnType } from "@types";
import Card from "components/Card";
import useColumn from "hooks/useColumn";

type ColumnProps = {
  id: ColumnType["id"];
};

function Column({ id }: ColumnProps): JSX.Element {
  const { column } = useColumn(id);

  return (
    <section>
      <header>
        <h3>{column.title}</h3>
      </header>
      <ol>
        {column.cardsId.map((id) => (
          <li>
            <Card id={id} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Column;
