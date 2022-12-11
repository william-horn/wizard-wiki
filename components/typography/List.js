import Container from "../containers/Container";
import Text from "./Text";

const List = ({ children, className="" }) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

List.Item = ({ children, className="" }) => {
  return (
    <Text className={"list-item " + className}>{children}</Text>
  );
}

export default List;