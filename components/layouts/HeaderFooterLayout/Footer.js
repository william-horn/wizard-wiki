
import Title from "../../typography/Title";
import { useAppContext } from "../../../providers/AppProvider";
import constructClassName from "../../../lib/helpers/constructClassName";

const Footer = ({ children, add, remove, override }) => {
  const { currentPage } = useAppContext();
  if (currentPage.excludes('footer', override)) return <></>;
  
  return (
    <footer className={constructClassName("bg-secondary", {add, remove})}>
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