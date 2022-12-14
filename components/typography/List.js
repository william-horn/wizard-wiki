import Container from "../containers/Container";
import Text from "./Text";
import constructClassName from "../../lib/helpers/constructClassName";

const List = ({ children, add, remove }) => {
  return (
    <Container add={constructClassName("", {add, remove})}>
      {children}
    </Container>
  );
};

List.Item = ({ children, add, remove }) => {
  return (
    <Text add={constructClassName("list-item", {add, remove})}>{children}</Text>
  );
}

export default List;