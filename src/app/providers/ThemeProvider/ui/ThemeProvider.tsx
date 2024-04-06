// import { FC, ReactNode, useMemo, useState } from "react";
// import {
//   LOCAL_STORAGE_THEME_KEY,
//   Theme,
//   ThemeContext,
// } from "../lib/ThemeContext";

import { FC, ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

interface BaseLayoutProps {
  children?: ReactNode;
}

const defaultThemeValue =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<BaseLayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultThemeValue);
  const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
