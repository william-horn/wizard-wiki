import MainTitle from "../../typography/MainTitle";

const Header = ({ children, className="" }) => {
  return (
    <header className={"bottom-line pb-6 " + className}>
      {children}
    </header>
  );
};

Header.Title = ({ children }) => {
  return (
    <MainTitle>{children}</MainTitle>
  );
}

export default Header;