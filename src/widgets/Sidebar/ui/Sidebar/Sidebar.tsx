import { classNames } from "shared/lib/helpers/className/className";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation();
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={classNames(cls.content, { [cls.contentClosed]: !collapsed })}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={classNames(cls.main)}
          to={"/"}
        >
          {t("Main")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          {t("About ")}
        </AppLink>
      </div>
    </div>
  );
};

export default Sidebar;
