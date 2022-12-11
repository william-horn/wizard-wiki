import React, { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem(key));

    if (prev && prev !== initialValue) { 
      setState(prev);
    } else if (prev !== null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

