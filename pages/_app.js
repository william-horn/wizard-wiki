import '../styles/globals.css';
import { AppProvider } from '../providers';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Enum from '../enums';
import { useEffect, useState } from 'react';
import Screen from '../components/containers/Screen';
import Container from '../components/containers/Container';
import LayoutController from '../components/layouts';

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
  return (
    <AppProvider value={{
      // top level state vars
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
