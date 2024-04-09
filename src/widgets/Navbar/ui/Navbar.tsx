/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Button from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { clsx } from 'shared/lib/helpers/clsx/clsx';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpened, setAuthModalOpened] = useState(false);

  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();
  const onToggleModal = useCallback(() => {
    setAuthModalOpened((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={clsx(cls.navbar, {}, [className])}>
        <Button onClick={onLogout} className={cls.loginBtn} theme='primary'>
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={clsx(cls.navbar, {}, [className])}>
      <Button className={cls.loginBtn} theme='primary' onClick={onToggleModal}>
        {t('login')}
      </Button>
      <LoginModal isOpen={authModalOpened} onClose={onToggleModal} />
    </div>
  );
};
