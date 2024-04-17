import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';

interface ArticleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className={clsx(cls, {}, [className])}>Article not found</div>;
  }

  return (
    <div className={clsx(cls, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
