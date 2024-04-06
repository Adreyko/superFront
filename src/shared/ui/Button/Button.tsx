import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: 'clear';
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(cls.button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};

export default Button;
