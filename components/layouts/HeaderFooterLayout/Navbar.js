
import Text from "../../typography/Text";
import NavLink from "../../buttons/NavLink";
import Enum from "../../../enums";
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from "../../../providers/AppProvider";
import constructClassName from "../../../lib/helpers/constructClassName";

const navPages = [
  Enum.Pages.Home,
  Enum.Pages.Explore,
  Enum.Pages.About,
  Enum.Pages.Donate
]

const Navbar = ({ add, remove, override }) => {
  const { currentPage } = useAppContext();
  if (currentPage.excludes('navbar', override)) return <></>;
  
  return (
    <nav className={constructClassName("flex flex-wrap justify-center gap-2 p-3 bottom-line bg-secondary", {add, remove})}>
      {
        navPages.map((page, index) =>
          <>
            <NavLink
            key={uuidv4()}
            url={page.url} 
            currentUrl={currentPage.url}>
              {page.name}
            </NavLink>
            {index < navPages.length - 1 && <Text>|</Text>}
          </>
        )
      }
    </nav>
  );
};

export default Navbar;