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
    | 'secondaryInverted'
    | 'warning'
    | 'outline';
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      className={clsx(cls.button, { [cls.disabled]: disabled }, [
        className,
        cls[theme ?? 'clear'],
        cls[size],
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
