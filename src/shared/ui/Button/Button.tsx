import { classNames } from "shared/lib/helpers/className/className";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import "./../../../app/styles/index.scss"
export enum ThemeButton {
  CLEAR = "clear",
  OUTLINED = "outlined",
  FILLED = "filled"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, cls[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
