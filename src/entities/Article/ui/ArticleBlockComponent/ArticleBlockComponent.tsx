import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleBlockComponent.module.scss';

interface ArticleBlockComponentProps {
  className?: string;
}

export const ArticleBlockComponent = ({
  className,
}: ArticleBlockComponentProps) => {
  return (
    <div className={clsx(cls, {}, [className])}>ArticleBlockComponent</div>
  );
};

export default ArticleBlockComponent;
