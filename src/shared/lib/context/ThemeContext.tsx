import { Theme } from '@/shared/const/theme';
import { createContext } from 'react';

export interface ContextThemeProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ContextThemeProps>({});
