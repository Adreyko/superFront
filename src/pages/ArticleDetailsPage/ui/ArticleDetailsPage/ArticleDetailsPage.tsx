import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';

interface ArticleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  return <div className={clsx(cls, {}, [className])}>ArticleDetailsPage</div>;
};

export default memo(ArticleDetailsPage);
