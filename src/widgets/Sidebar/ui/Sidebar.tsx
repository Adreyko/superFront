import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './Sidebar.module.scss';
import { useMemo, useState } from 'react';
import Button from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import LangSwitcher from '@/widgets/LangSwitcher/LangSwitcher';

import { getAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import SidebarItems from './SidebarItems/SidebarItems';
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  const isAuth = useSelector(getAuthData);

  const sidebarItemsList = useSelector(getSidebarItems);
  const sidebarItems = useMemo(
    () =>
      sidebarItemsList
        .filter((item) => (item.authOnly ? isAuth : true))
        .map((item) => (
          <SidebarItems collapsed={collapsed} key={item.path} items={item} />
        )),
    [collapsed, isAuth, sidebarItemsList]
  );

  return (
    <menu
      className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={clsx(cls.links)}>{sidebarItems}</div>
      <Button
        theme='secondaryInverted'
        className={cls.collapsedBtn}
        onClick={toggleCollapse}
      >
        {collapsed ? '<' : '>'}
      </Button>
      <div className={cls.switcher}>
        <LangSwitcher variant={collapsed ? 'short' : 'full'} />
        <ThemeSwitcher />
      </div>
    </menu>
  );
};

export default Sidebar;
