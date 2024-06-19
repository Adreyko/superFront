import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './ThemeSwithcer.module.scss';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import Button from '@/shared/ui/Button/Button';
import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button
      theme='clear'
      onClick={toggleTheme}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      className={clsx(cls.themeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';
export default ThemeSwitcher;
