
import HeaderFooterLayout from "./HeaderFooterLayout";

import Container from "../containers/Container";
import Enum from "../../enums";
import Head from "next/head";
import { useRouter } from "next/router";

const LayoutController = ({ children }) => {
  const router = useRouter();
  const currentPage = Enum.Pages.findByMatch('url', router.pathname) || Enum.Pages._404;
  const layoutName = typeof currentPage.layout === 'string' && currentPage.layout || currentPage.layout.name;

  const getRenderedLayout = () => {
    switch (layoutName) {
      case 'HeaderFooterLayout':
        return (
          <HeaderFooterLayout currentPage={currentPage}>
            {children}
          </HeaderFooterLayout>
        )
      default:
        return children;
    }
  }

  return (
    <Container>
      {getRenderedLayout()}
    </Container>
  );
};

export default LayoutController;

