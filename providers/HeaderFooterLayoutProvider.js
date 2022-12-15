
import React, { createContext, useContext } from 'react';

const HeaderFooterLayoutContext = createContext();
export const useHeaderFooterLayoutContext = () => useContext(HeaderFooterLayoutContext);

const HeaderFooterLayoutProvider = ({ children, value }) => {
  return (
    <HeaderFooterLayoutContext.Provider value={value}>
      {children}
    </HeaderFooterLayoutContext.Provider>
  );
};

export default HeaderFooterLayoutProvider;


