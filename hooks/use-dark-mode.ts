'use client';
import { useEffect } from 'react';
import useLocalStorage from './use-local-storage';

function useDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return [theme, setTheme] as const;
}

export default useDarkMode;
