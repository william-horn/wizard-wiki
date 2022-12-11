import Container from "../components/containers/Container";
import Text from "../components/typography/Text";
import MainTitle from "../components/typography/MainTitle";

const Header = ({ children, className="" }) => {
  return (
    <header className={"bottom-line " + className}>
      {children}
    </header>
  );
};

Header.Title = ({ children }) => {
  return (
    <MainTitle className="pt-10">{children}</MainTitle>
  );
}

export default Header;
