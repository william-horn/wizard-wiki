
const MainTitle = ({ children, className="" }) => {
  return (
    <h1 className={'p-8 pb-6 text-5xl font-bold text-center text-main-title ' + className}>
      {children}
    </h1>
  );
};

MainTitle.displayName = "MainTitle";
export default MainTitle;