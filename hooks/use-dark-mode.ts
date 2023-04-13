'use client';
import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let data = localStorage.getItem('theme') || 'light';
    setTheme(data);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useDarkMode;
