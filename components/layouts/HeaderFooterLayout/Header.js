import PageTitle from "../../typography/PageTitle";
import { useAppContext } from "../../../providers/AppProvider";
import constructClassName from "../../../lib/helpers/constructClassName";
import React from "react";

const Header = React.forwardRef(({ children, add, remove, override }, ref) => {
  const { currentPage } = useAppContext();
  if (currentPage.excludes('header', override)) return <></>;
  
  return (
    <header ref={ref} className={constructClassName("bottom-line pb-6", {add, remove})}>
      {children}
    </header>
  );
});

Header.Title = ({ children }) => {
  return (
    <PageTitle>{children}</PageTitle>
  );
}

export default Header;