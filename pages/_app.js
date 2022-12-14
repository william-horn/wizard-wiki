import '../styles/globals.css';
import { AppProvider } from '../providers';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Enum from '../enums';
import { useEffect, useState, useRef } from 'react';
import Screen from '../components/containers/Screen';
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
  const currentPage = Enum.Pages.findByMatch('url', router.pathname) || Enum.Pages._404;
  const lastPageRef = useRef(null);
  const lastPage = lastPageRef.current;

  useEffect(() => {
    lastPageRef.current = currentPage;
  });

  const layoutDiff = (componentName) => {
    return lastPage && 
      (currentPage.excludes(componentName) !== lastPage.excludes(componentName));
  }

  return (
    <AppProvider value={{
      // top level state vars
      currentPage,
      lastPage,
      firstPageLoad: lastPage === null,
      layoutDiff
    }}>
      <Container className="min-h-screen bg-primary">
        <LayoutController>
          <Component {...pageProps} />
        </LayoutController>
      </Container>
    </AppProvider>
  )
}

MyApp.displayName = "MyApp";
export default MyApp
