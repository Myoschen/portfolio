'use client';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must to be use within ThemeProvider!');
  }
  return context;
}

export default useTheme;
