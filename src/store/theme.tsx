'use client'

import { createContext, type ReactNode, useCallback, useEffect } from 'react'

import useLocalStorage from '@/hooks/use-local-storage'

type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

interface ProviderProps {
  children: ReactNode
}

function ThemeProvider({ children }: ProviderProps) {
  const [theme, set] = useLocalStorage('theme', 'light')

  const setTheme = useCallback((theme: string) => set(theme), [set])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export { ThemeContext }
