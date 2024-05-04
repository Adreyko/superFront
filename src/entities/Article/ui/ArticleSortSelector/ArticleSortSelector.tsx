import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleSortSelector.module.scss';
import Select, { SelectOptions } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = ({
  className,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) => {
  const orderOption = useMemo<Array<SelectOptions<SortOrder>>>(
    () => [
      { value: 'asc', content: 'Increasing' },
      { value: 'desc', content: 'Decreasing ' },
    ],
    []
  );

  const sortFiledOption = useMemo<Array<SelectOptions<ArticleSortField>>>(
    () => [
      { value: ArticleSortField.CREATED, content: 'created date' },
      { value: ArticleSortField.TITLE, content: 'Tittles' },
      { value: ArticleSortField.VIEWS, content: 'Views' },
    ],
    []
  );

  return (
    <div className={clsx(cls, {}, [className])}>
      {' '}
      <Select
        onChange={onChangeSort}
        label='Sort by'
        options={sortFiledOption}
      />
      <Select onChange={onChangeOrder} label='by' options={orderOption} />
    </div>
  );
};

export default ArticleSortSelector;
