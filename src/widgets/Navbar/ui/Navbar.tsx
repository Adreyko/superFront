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
import Text from 'shared/ui/Text/Text';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

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
      <header className={clsx(cls.navbar, {}, [className])}>
        <div className={cls.leftSide}>
          <Text title='News app' />
          <AppLink to={RouterPath.article_create} theme='secondary'>
            Create article
          </AppLink>
        </div>
        <Button onClick={onLogout} className={cls.loginBtn} theme='primary'>
          {t('logout')}
        </Button>
      </header>
    );
  }

  return (
    <header className={clsx(cls.navbar, {}, [className])}>
      <Button className={cls.loginBtn} theme='primary' onClick={onToggleModal}>
        {t('login')}
      </Button>
      {authModalOpened && (
        <LoginModal isOpen={authModalOpened} onClose={onToggleModal} />
      )}
    </header>
  );
};
