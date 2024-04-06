import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './AppLink.module.scss';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type AppLinkTheme = 'secondary' | 'primary';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = 'primary',
  to,
  ...props
}) => {
  return (
    <Link
      className={clsx(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AppLink;
