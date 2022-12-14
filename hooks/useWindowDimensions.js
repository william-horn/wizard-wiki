import { useState, useEffect } from 'react';
import { isClient } from '../lib/helpers/machineType';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    setWindowDimensions(getWindowDimensions());
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}