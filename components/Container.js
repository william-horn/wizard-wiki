

const Container = ({ children, className="" }) => {
  return (
    <div className={"custom-container " + className}>
      {children}
    </div>
  );
};

export default Container;
