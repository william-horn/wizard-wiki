import Container from "../components/containers/Container";
import Text from "../components/typography/Text";
import MainTitle from "../components/typography/MainTitle";

const Header = ({ children }) => {
  return (
    <header className="bottom-line">
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
