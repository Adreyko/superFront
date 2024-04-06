/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { clsx } from 'shared/lib/helpers/clsx/clsx';
import AppLink from 'shared/ui/AppLink/AppLink';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [t2] = useTranslation('about');
  const path = useLocation();

  return (
    <div className={clsx(cls.navbar, {}, [className])}>
      <div className={clsx(cls.links)}>
        <AppLink theme={path.pathname === '/' ? 'primary' : 'primary'} to="/">
          {t('main')}
        </AppLink>
        <AppLink
          theme={path.pathname === '/about' ? 'secondary' : 'primary'}
          to="/about"
        >
          {t2('about')}
        </AppLink>

        <LangSwitcher />
      </div>
    </div>
  );
};
