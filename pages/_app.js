import '../styles/globals.css';
import { AppProvider } from '../providers';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Enum from '../enums';
import { useEffect, useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useLocalStorage(Enum.StorageKeys.Theme.value, Enum.Themes.Default.value);

  return (
    <AppProvider value={{
      theme,
      setTheme
    }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}

export default MyApp
