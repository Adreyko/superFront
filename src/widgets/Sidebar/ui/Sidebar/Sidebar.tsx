import { classNames } from "shared/lib/helpers/className/className";
import cls from "./Sidebar.module.scss";
import { useState } from "react";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed)
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};

export default Sidebar;
