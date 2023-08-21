import { classNames } from "shared/lib/helpers/className/className";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  return (
    <Button
      className={classNames(cls.lang, {}, [className])}
      theme={ThemeButton.CLEAR}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={async () => await i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua")}
    >
      {t("Change language")}
    </Button>
  );
};

export default LangSwitcher;
