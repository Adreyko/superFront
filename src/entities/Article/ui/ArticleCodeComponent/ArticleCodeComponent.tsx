import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleCodeComponent.module.scss';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import Code from 'shared/ui/Code/Code';

interface ArticleCodeComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeComponent = ({
  className,
  block,
}: ArticleCodeComponentProps) => {
  return (
    <div className={clsx(cls, {}, [className])}>
      <Code codeValue={block.code} />
    </div>
  );
};

export default ArticleCodeComponent;
