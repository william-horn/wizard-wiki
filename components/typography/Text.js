
import constructClassName from "../../lib/helpers/constructClassName";

const Text = ({ children, className, remove }) => {
  return <p className={constructClassName("text-base", {className, remove})}>{children}</p>
};

export default Text;

