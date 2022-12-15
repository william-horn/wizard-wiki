
import Text from "../../typography/Text";
import NavLink from "../../buttons/NavLink";
import Enum from "../../../enums";
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from "../../../providers/AppProvider";
import constructClassName from "../../../lib/helpers/constructClassName";
import React, { useEffect, useState } from 'react';

const navPages = [
  Enum.Pages.Home,
  Enum.Pages.Explore,
  Enum.Pages.About,
  Enum.Pages.Donate,
  Enum.Pages.News
]

const Navbar = React.forwardRef(({ className, remove, override, style }, ref) => {
  const { currentPage } = useAppContext();
  if (currentPage.excludes('navbar', override)) return <></>;
  
  return (
    <nav ref={ref} style={style} className={constructClassName("navbar-container flex flex-wrap sticky top-0 z-50 justify-center p-3 bottom-line bg-secondary", {className, remove})}>
      {
        navPages.map((page, index) =>
          <NavLink
          key={uuidv4()}
          url={page.url} 
          currentUrl={currentPage.url}>
            {page.name}
            <span className={`px-3 text-white ${index >= navPages.length - 1 && 'hidden'}`}>|</span>
          </NavLink>
        )
      }
    </nav>
  );
});

export default Navbar;