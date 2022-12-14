import Text from "./Text";
import constructClassName from "../../lib/helpers/constructClassName";

const Title = ({ children, add, remove }) => {
  return (
    <Text add={constructClassName("title font-bold text-2xl text-white text-center mb-3 p-2", {add, remove})}>
      {children}
    </Text>
  );
};

export default Title;