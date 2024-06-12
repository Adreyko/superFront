/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Button from '@/shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getAuthData } from '@/entities/User';
import Text from '@/shared/ui/Text/Text';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { RouterPath } from '@/shared/config/routeConfig/routeConfig';

import HStack from '@/shared/ui/Stack/HStack/HStack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpened, setAuthModalOpened] = useState(false);

  const authData = useSelector(getAuthData);

  const onToggleModal = useCallback(() => {
    setAuthModalOpened((prev) => !prev);
  }, []);

  if (authData) {
    return (
      <header className={clsx(cls.navbar, {}, [className ?? ''])}>
        <Text text='Production application' className={cls.appName} />
        <AppLink to={RouterPath.article_create} className={cls.createBtn}>
          {t('createArticle')}
        </AppLink>
        <HStack gap='16' justify='end' className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
