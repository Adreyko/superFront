import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './AriclePage.module.scss';
import { memo } from 'react';

interface AriclePageProps {
  className?: string;
}

export const AriclePage = ({ className }: AriclePageProps) => {
  return <div className={clsx(cls, {}, [className])}>AriclePage</div>;
};

export default memo(AriclePage);
