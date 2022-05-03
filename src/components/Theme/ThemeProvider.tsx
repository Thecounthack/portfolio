import React, { FC, useState, useEffect } from 'react';
import { ThemeContext, themes } from '_components/Theme/ThemeContext';

import { useDispatch } from 'react-redux';
import { setAppTheme } from '_redux/reducers/appReducer';

interface IThemeProvider {
    children: React.ReactChildren | React.ReactNode,
}

const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`;
    if (Object.values(themes).includes(theme)) return theme;

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) return themes.light;

    return themes.dark;
};

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
    const [theme, setTheme] = useState(getTheme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        dispatch(setAppTheme(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
