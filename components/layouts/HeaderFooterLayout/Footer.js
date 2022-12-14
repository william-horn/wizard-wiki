
import Title from "../../typography/Title";
import { useAppContext } from "../../../providers/AppProvider";
import constructClassName from "../../../lib/helpers/constructClassName";
import React from 'react';

const Footer = React.forwardRef(({ children, add, remove, override }, ref) => {
  const { currentPage } = useAppContext();
  if (currentPage.excludes('footer', override)) return <></>;
  
  return (
    <footer ref={ref} className={constructClassName("bg-secondary", {add, remove})}>
      {children}
    </footer>
  );
});

Footer.Title = ({ children, className="" }) => {
  return (
    <Title className={className}>{children}</Title>
  )
}

export default Footer;