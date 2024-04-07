import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: 'clear' | "primary" | 'primaryInverted' | 'secondary' | "secondaryInverted";
  size?:'normal' | 'xl' | 'large'
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  size = 'normal',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(cls.button, {}, [className, cls[theme], cls[size]])}
    >
      {children}
    </button>
  );
};

export default Button;
