import '../styles/globals.css';
import { AppProvider } from '../providers';
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
  // const currentPage = Enum.Pages.findByMatch('url', router.pathname) || Enum.Pages._404;
  // const lastPageRef = useRef(null);
  // const lastPage = lastPageRef.current;

  // // Update the last page visited on this website.
  // useEffect(() => {
  //   lastPageRef.current = currentPage;
  // });

  // /* 
  //   Determine if there is a difference in layout sub-component rendering between 
  //   the current page and the last page.
  // */
  // const layoutDiff = (componentName) => {
  //   return lastPage && 
  //     (currentPage.excludes(componentName) !== lastPage.excludes(componentName));
  // }

  // console.log('last page: ', lastPage && lastPage.name);
  // console.log('current page: ', currentPage.name);
  // console.log('layout diff: ', layoutDiff('header'));

  return (
    <AppProvider value={{
      // top level state vars
      // currentPage,
      // lastPage,
      // firstPageLoad: lastPage === null,
      // layoutDiff
    }}>
      <div className="min-h-screen bg-primary">
        {/* <LayoutController> */}
          <Component {...pageProps} />
        {/* </LayoutController> */}
      </div>
    </AppProvider>
  )
}


export default MyApp
