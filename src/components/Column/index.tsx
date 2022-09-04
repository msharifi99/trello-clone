import { Column as ColumnType } from "@types";
import Card from "components/Card";
import useColumn from "hooks/useColumn";
import Container from "./Container";

type ColumnProps = {
  id: ColumnType["id"];
};

function Column({ id }: ColumnProps): JSX.Element {
  const { column } = useColumn(id);

  return (
    <Container title={column.title}>
      <ol>
        {column.cardsId.map((id) => (
          <li>
            <Card id={id} />
          </li>
        ))}
      </ol>
    </Container>
  );
}

export default Column;
