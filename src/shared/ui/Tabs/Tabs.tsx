import { FC, memo, useMemo } from 'react';

import Card from '../Card/Card';
import cls from './Tabs.module.scss';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';

export interface TabItem {
  value: string;
  content: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

const Tabs: FC<TabsProps> = memo(
  ({ className = '', tabs, value, onTabClick }: TabsProps) => {
    const renderTabs = useMemo(
      () =>
        tabs.map((tab) => (
          <Card onClick={() => onTabClick(tab)} key={tab.value}>
            {tab.content}
          </Card>
        )),
      [onTabClick, tabs]
    );

    return <div className={clsx(cls.tabs, {}, [className])}>{renderTabs}</div>;
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
