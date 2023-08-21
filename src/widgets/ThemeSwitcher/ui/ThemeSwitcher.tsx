import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers/className/className";
import cls from "./ThemeSwitcher.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.themetoggle, {}, [cls[className]])}
      theme = {ThemeButton.CLEAR}
      onClick={toggleTheme}
    ></Button>
  );
};

export default ThemeSwitcher;
