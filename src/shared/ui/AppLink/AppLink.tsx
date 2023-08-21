import { classNames } from "shared/lib/helpers/className/className";
import cls from "./AppLink.module.scss";
import { FC, ReactNode } from "react";
import { Link, Path } from "react-router-dom";
export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps {
  className?: string
  children?: ReactNode
  to: string | Partial<Path>
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [className, cls[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
