import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/helpers/className/className";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
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
      <LangSwitcher />
      <ThemeSwitcher className="position" />
    </div>
  );
};
