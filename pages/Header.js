import Container from "../components/containers/Container";
import Text from "../components/typography/Text";
import MainTitle from "../components/typography/MainTitle";

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

Header.displayName = "Header";
export default Header;
