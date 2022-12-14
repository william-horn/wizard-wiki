import '../styles/globals.css';
import AppProvider from '../providers/AppProvider';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Enum from '../enums';
import { useEffect, useState, useRef } from 'react';
import Container from '../components/containers/Container';
import LayoutController from '../components/layouts';
import { useRouter } from 'next/router';

if (typeof window !== 'undefined') {
  const allEl = window.document.querySelector("body");
  window.addEventListener("keydown", (event) => {
    if (event.keyCode === 87) {
      if (allEl.classList.contains("wireframe")) {
        allEl.classList.remove("wireframe");
      } else {
        allEl.classList.add("wireframe");
      }
    }
  });
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.pathname;
  const currentPage = Enum.Pages.findByMatch('url', currentUrl) || Enum.Pages._404;
  const lastPageRef = useRef(null);
  const lastPage = lastPageRef.current;

  // Update the last page visited on this website.
  useEffect(() => {
    lastPageRef.current = currentPage;
  }, [currentUrl]);

  /* 
    Determine if there is a difference in layout sub-component rendering between 
    the current page and the last page.
  */
  const layoutDiff = (componentName) => {
    return lastPage && 
      (currentPage.excludes(componentName) !== lastPage.excludes(componentName));
  }

  // console.log('current page: ', currentPage.name);
  // console.log('last page: ', lastPage && lastPage.name);

  return (
    <AppProvider value={{
      // top level state vars
      currentPage,
      lastPage,
      firstPageLoad: lastPage === null,
      currentUrl,
      layoutDiff
    }}>
      <Container className="wrapper min-h-screen bg-primary">
        <LayoutController>
          <Component {...pageProps} />
        </LayoutController>
      </Container>
    </AppProvider>
  )
}


export default MyApp
