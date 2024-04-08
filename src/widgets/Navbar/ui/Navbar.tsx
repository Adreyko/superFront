/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Button from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { clsx } from 'shared/lib/helpers/clsx/clsx';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpened, setAuthModalOpened] = useState(false);

  const onToggleModal = () => {
    setAuthModalOpened((prev) => !prev);
  };

  return (
    <div className={clsx(cls.navbar, {}, [className])}>
      <Button className={cls.loginBtn} theme='primary' onClick={onToggleModal}>
        {t('login')}
      </Button>
      <LoginModal isOpen={authModalOpened} onClose={onToggleModal} />
    </div>
  );
};
