import styled from "@emotion/styled";
import Column from "components/Column";
import useBoard from "hooks/useBoard";
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
};

function ColumnList({ className }: ColumnListProps): JSX.Element {
  const { columns } = useBoard();
  return (
    <List className={className}>
      {columns.map((column) => (
        <ListItem>
          <Column id={column.id} />
        </ListItem>
      ))}
    </List>
  );
}

export default ColumnList;
