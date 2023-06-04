import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./ThemeContext";

export interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Themes
}

export function useTheme(): IUseThemeResult {
  const {theme, setTheme} =  useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {theme, toggleTheme};
}