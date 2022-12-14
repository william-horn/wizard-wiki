
import constructClassName from "../../lib/helpers/constructClassName";

const Text = ({ children, add, remove }) => {
  return <p className={constructClassName("text-base", {add, remove})}>{children}</p>
};

export default Text;

