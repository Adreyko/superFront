import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button onClick={toggleCollapse}>Collapsed</Button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
