import Text from "./Text";

const Title = ({ children, className="" }) => {
  return (
    <Text className={"title font-bold text-2xl text-white mb-3 p-2 " + className}>
      {children}
    </Text>
  );
};

export default Title;