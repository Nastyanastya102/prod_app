import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.BLUE;
            break;
        case Theme.BLUE:
            newTheme = Theme.PURPLE;
            break;
        case Theme.PURPLE:
            newTheme = Theme.DARK;
            break;
        // case Theme.PURPLE:
        //     newTheme = Theme.DARK;
        //     break;
        default:
            newTheme = Theme.ORANGE;
            break;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme ?? Theme.LIGHT,
        toggleTheme,
    };
}
