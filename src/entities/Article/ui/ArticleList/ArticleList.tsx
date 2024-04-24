import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleList.module.scss';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import Text from 'shared/ui/Text/Text';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view: ArticleView;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  view,
}: ArticleListProps) => {
  const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
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
    <div className={clsx(cls.articleList, {}, [className, cls[view]])}>
      {articles?.map((article) => (
        <ArticleListItem
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
