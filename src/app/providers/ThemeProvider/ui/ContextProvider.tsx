import { FunctionComponent, ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ContextTheme";
interface BaseLayoutProps {
  children?: ReactNode
}

const defaultThemeValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
const ThemeProvider: FunctionComponent<BaseLayoutProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultThemeValue);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider
