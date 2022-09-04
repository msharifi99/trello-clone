import styled from "@emotion/styled";
import Column from "components/Column";

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
  return (
    <List className={className}>
      <li>
        <Column id="column_10" />
      </li>
    </List>
  );
}

export default ColumnList;
