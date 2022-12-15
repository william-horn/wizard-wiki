import Text from "./Text";
import constructClassName from "../../lib/helpers/constructClassName";

const Title = ({ children, className, remove }) => {
  return (
    <Text className={constructClassName("title font-bold text-2xl text-white text-center mb-3 p-2", {className, remove})}>
      {children}
    </Text>
  );
};

export default Title;