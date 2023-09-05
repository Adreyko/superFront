import { classNames } from "shared/lib/helpers/className/className";
import cls from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";

interface NotFountProps {
  className?: string
}

export const NotFound = ({ className }: NotFountProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.container, {}, [className])}>
      {t("page-not-found")}
    </div>
  );
};

export default NotFound;
