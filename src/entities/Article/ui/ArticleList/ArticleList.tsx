import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '@/entities/Article/model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import Text from '@/shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  view,
  target,
}: ArticleListProps) => {
  const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 12 : 3)
      .fill(0)
      .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
      ));

  if (!isLoading && !articles?.length) {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      <div className={clsx(cls.ArticleList, {}, [className, cls[view ?? '']])}>
        <Text size={'xl'} title={'Articles not found'} />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    <div className={clsx(cls.articleList, {}, [cls[view], className])}>
      {articles?.map((article) => (
        <ArticleListItem
          target={target}
          article={article}
          view={view}
          key={`str${article.id}`}
          className={cls.card}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export default ArticleList;
