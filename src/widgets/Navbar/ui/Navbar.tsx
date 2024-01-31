import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/helpers/className/className";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import Modal from "shared/ui/Modal/Modal";
interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ThemeButton.FILLED}>{t("Login")}</Button>
      <LangSwitcher />
      <ThemeSwitcher className="position" />
      <Modal isOpen={isAuthModal} onClose={() => { setIsAuthModal(false); }}>
        Login
      </Modal>
    </div>
  );
};
