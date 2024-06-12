import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article/model/types/article';
import ColumnIcon from '@/shared/assets/icons/articles-column.svg';
import ListIcon from '@/shared/assets/icons/articles-list.svg';
import Button from '@/shared/ui/Button/Button';
import Icon from '@/shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewSelect: (value: ArticleView) => void;
}

const ViewTypes = [
  { view: ArticleView.BIG, icon: ListIcon },
  { view: ArticleView.SMALL, icon: ColumnIcon },
];

export const ArticleViewSelector = ({
  className,
  view,
  onViewSelect,
}: ArticleViewSelectorProps) => {
  const onClick = (view: ArticleView) => {
    return () => {
      onViewSelect(view);
    };
  };
  return (
    <div className={clsx(cls.ArticleView, {}, [className])}>
      {ViewTypes.map((viewType) => (
        <Button
          className={clsx(
            '',
            { [cls.notSelected]: view !== viewType.view },
            []
          )}
          key={viewType.view}
          onClick={onClick(viewType.view)}
        >
          <Icon Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  );
};

export default ArticleViewSelector;
