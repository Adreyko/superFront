import cls from './SidebarItems.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { clsx } from 'shared/lib/helpers/clsx/clsx';
import { memo } from 'react';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebarItems';
interface SidebarItemsProps {
  items: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItems = memo(({ items, collapsed }: SidebarItemsProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const { path, text, Icon } = items;
  return (
    <AppLink
      className={clsx('', { [cls.collapsed]: collapsed }, [cls])}
      theme={location.pathname === path ? 'primary' : 'secondary'}
      to={path}
    >
      <Icon className={cls.icon} />
      <span className={cls.linkText}> {t(text)}</span>
    </AppLink>
  );
});

SidebarItems.displayName = 'SidebarItemsMemo';

export default SidebarItems;
