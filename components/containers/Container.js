import constructClassName from "../../lib/helpers/constructClassName";

const Container = ({ children, add, remove }) => {
  return (
    <div className={constructClassName("", {add, remove})}>
      {children}
    </div>
  );
};

export default Container;
