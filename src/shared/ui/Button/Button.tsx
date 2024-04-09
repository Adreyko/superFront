import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?:
    | 'clear'
    | 'primary'
    | 'primaryInverted'
    | 'secondary'
    | 'secondaryInverted';
  size?: 'normal' | 'xl' | 'large';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  size = 'normal',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={clsx(cls.button, { [cls.disabled]: disabled }, [
        className,
        cls[theme],
        cls[size],
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
