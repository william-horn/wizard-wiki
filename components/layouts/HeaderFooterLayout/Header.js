import PageTitle from "../../typography/PageTitle";
import { useAppContext } from "../../../providers/AppProvider";
import constructClassName from "../../../lib/helpers/constructClassName";
import React from "react";

const Header = React.forwardRef(({ children, className, remove, override, style }, ref) => {
  const { currentPage } = useAppContext();
  if (currentPage.excludes('header', override)) return <></>;
  
  return (
    <header ref={ref} style={style} className={constructClassName("bottom-line pb-6 overflow-hidden", {className, remove})}>
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