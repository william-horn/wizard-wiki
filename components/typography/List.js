import Container from "../containers/Container";
import Text from "./Text";
import constructClassName from "../../lib/helpers/constructClassName";

const List = ({ children, className, remove }) => {
  return (
    <Container className={constructClassName("", {className, remove})}>
      {children}
    </Container>
  );
};

List.Item = ({ children, className, remove }) => {
  return (
    <Text className={constructClassName("list-item", {className, remove})}>{children}</Text>
  );
}

export default List;