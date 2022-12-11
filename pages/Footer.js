import Container from "../components/containers/Container";
import Text from "../components/typography/Text";
import Title from "../components/typography/Title";

const Footer = ({ children, className="" }) => {
  return (
    <footer className={"bg-secondary " + className}>
      {children}
    </footer>
  );
};

Footer.Title = ({ children, className="" }) => {
  return (
    <Title className={className}>{children}</Title>
  )
}

export default Footer;