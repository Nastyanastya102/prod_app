import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from '../lib/ThemeContext';

const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes ?? Themes.LIGHT;

interface IThemeProps {
    initialTheme?: Themes
}

const ThemeContextProvider: FC<IThemeProps> = (props) => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Themes>(initialTheme ?? defaulTheme);
    const defaultValue = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider
            value={defaultValue}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
