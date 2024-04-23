import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './AriclePage.module.scss';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';

interface AriclePageProps {
  className?: string;
}

export const ArticlePage = ({ className }: AriclePageProps) => {
  return (
    <div className={clsx(cls, {}, [className])}>
      <ArticleList />
    </div>
  );
};

export default memo(ArticlePage);
