import { Column as ColumnType } from "@types";
import Card from "components/Card";

type ColumnProps = {
  id: ColumnType["id"];
};

function Column({ id }: ColumnProps): JSX.Element {
  return (
    <section>
      <header>
        <h3>Column {id}</h3>
      </header>
      <ol>
        <li>
          <Card id="card_32" />
        </li>
      </ol>
    </section>
  );
}

export default Column;
