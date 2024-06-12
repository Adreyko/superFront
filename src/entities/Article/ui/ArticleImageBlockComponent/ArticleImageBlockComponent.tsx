import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '@/entities/Article/model/types/article';
import Text from '@/shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
  className,
  block,
}: ArticleImageBlockComponentProps) => {
  return (
    <div className={clsx(cls, {}, [className])}>
      <img className={cls.img} src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} textAlign='center' />}
    </div>
  );
};

export default ArticleImageBlockComponent;
