
import HeaderFooterLayout from "./HeaderFooterLayout";

import Container from "../containers/Container";
import Enum from "../../enums";
import Head from "next/head";
import { useAppContext } from "../../providers/AppProvider";

const LayoutController = ({ children }) => {
  const { currentPage } = useAppContext();
  const layoutName = typeof currentPage.layout === 'string' && currentPage.layout || currentPage.layout.name;

  const getRenderedLayout = () => {
    switch (layoutName) {
      case 'HeaderFooterLayout':
        return (
          <HeaderFooterLayout>
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

