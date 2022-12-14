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
  const lastPage = useRef(null);

  useEffect(() => {
    lastPage.current = currentPage;
  });

  console.log('last page: ', lastPage.current);
  console.log('this page: ', currentPage);

  return (
    <AppProvider value={{
      // top level state vars
      currentPage,
      lastPage: lastPage.current
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
