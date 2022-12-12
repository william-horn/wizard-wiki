
const Text = ({ children, className="" }) => {
  return <p className={"text-base " + className}>{children}</p>
};

Text.displayName = "Text";
export default Text;

