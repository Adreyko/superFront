import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = ({
  className,
}: ArticleImageBlockComponentProps) => {
  return (
    <div className={clsx(cls, {}, [className])}>ArticleImageBlockComponent</div>
  );
};

export default ArticleImageBlockComponent;
