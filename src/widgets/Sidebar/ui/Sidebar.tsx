import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Sidebar.module.scss';
import { useMemo, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { sidebarItemsList } from '../model/items';
import SidebarItems from './SidebarItems/SidebarItems';
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItems = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItems collapsed={collapsed} key={item.path} items={item} />
      )),
    [collapsed]
  );

  return (
    <div
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
    </div>
  );
};

export default Sidebar;
