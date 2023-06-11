import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from '../lib/ThemeContext'

const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes ?? Themes.LIGHT;

const ThemeContextProvider: FC = ({ children }: { children: React.ReactChildren }) => {
  const [theme, setTheme] = useState<Themes>(defaulTheme);

  const defaultValue = useMemo(() => ({
    theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContext.Provider
      value={defaultValue}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider