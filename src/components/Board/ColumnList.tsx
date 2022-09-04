import styled from "@emotion/styled";
import Column from "components/Column";
import useBoard from "hooks/useBoard";

const List = styled.ol`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
`;

type ColumnListProps = {
  className?: string;
};

function ColumnList({ className }: ColumnListProps): JSX.Element {
  const { columns } = useBoard();
  return (
    <List className={className}>
      {columns.map((column) => (
        <li>
          <Column id={column.id} />
        </li>
      ))}
    </List>
  );
}

export default ColumnList;
