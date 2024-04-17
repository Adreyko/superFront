import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './AriclePage.module.scss';
import { memo } from 'react';

interface AriclePageProps {
  className?: string;
}

export const ArticlePage = ({ className }: AriclePageProps) => {
  return <div className={clsx(cls, {}, [className])}>article page</div>;
};

export default memo(ArticlePage);
