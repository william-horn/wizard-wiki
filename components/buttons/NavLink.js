
import Link from "next/link";
import Text from "../typography/Text";

const NavLink = ({ children, currentUrl, url, index, length }) => {
  return (
    <Text add={"nav-link " + (url === currentUrl ? 'hover-effect' : 'hover:hover-effect')}>
      <Link href={url}>{children}</Link>
    </Text>
  );
};

export default NavLink;