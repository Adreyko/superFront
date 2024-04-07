import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AppLink from 'shared/ui/AppLink/AppLink';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/outline-list.svg'
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation();
  const [t2] = useTranslation('about');
  const path = useLocation();

  return (
    <div
      className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={clsx(cls.links)}>
        <AppLink theme={path.pathname === '/' ? 'primary' : 'secondary'} to="/">
          <HomeIcon className={cls.icon}/>
         <span className={cls.linkText}>{t('main')}</span>
        </AppLink>
        <AppLink
          theme={path.pathname === '/about' ? 'primary' : 'secondary'}
          to="/about"
        >
          <AboutIcon className={cls.icon}/>
         <span className={cls.linkText}> {t2('about')}</span>
        </AppLink>

      </div>
      <Button theme='secondaryInverted' className={cls.collapsedBtn} onClick={toggleCollapse}>{collapsed ? '<' : '>'}</Button>
      <div className={cls.switcher}>
        <LangSwitcher variant={collapsed ? 'short' : 'full' } />
        <ThemeSwitcher />
      </div>

    </div>
  );
};

export default Sidebar;
