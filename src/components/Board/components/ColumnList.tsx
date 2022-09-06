import styled from "@emotion/styled";
import { Column as ColumnType } from "@types";
import Column from "components/Column";
import { spacings } from "styles/variables";

const List = styled.ol`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
`;

const ListItem = styled.li`
  & + & {
    margin-left: ${spacings.sm};
  }
`;

type ColumnListProps = {
  className?: string;
  columns: ColumnType[];
};

function ColumnList({ className, columns }: ColumnListProps): JSX.Element {
  return (
    <List className={className}>
      {columns.map((column) => (
        <ListItem key={column.id}>
          <Column id={column.id} />
        </ListItem>
      ))}
    </List>
  );
}

export default ColumnList;
