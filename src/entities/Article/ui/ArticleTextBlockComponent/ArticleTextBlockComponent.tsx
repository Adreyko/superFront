import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '@/entities/Article/model/types/article';
import Text from '@/shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block?: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({
  className,
  block,
}: ArticleTextBlockComponentProps) => {
  return (
    <div className={clsx(cls.textBlock, {}, [className])}>
      {block?.title && <Text title={block.title} />}
      {block?.paragraphs.map((paragraph, index) => (
        <Text key={paragraph} text={paragraph} />
      ))}
    </div>
  );
};

export default ArticleTextBlockComponent;
