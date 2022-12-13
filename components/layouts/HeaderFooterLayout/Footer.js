
import Title from "../../typography/Title";

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