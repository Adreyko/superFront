import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticlesPageFilters.module.scss';
import {
  ArticleSortField,
  ArticleType,
  ArticleView,
  ArticleViewSelector,
} from '@/entities/Article';
import { articlePageActions } from '@/pages/ArticlePage/model/slices/articlePageSlice';
import { useCallback } from 'react';
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageView,
  getArticlesPageType,
} from '@/pages/ArticlePage/model/selectors/getArticlesPageSelectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import Card from '@/shared/ui/Card/Card';
import Input from '@/shared/ui/Input/Input';
import ArticleSortSelector from '@/features/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from '@/shared/types';
import { fetchPageArticles } from '@/pages/ArticlePage/model/services/fetchPageArticles';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { TabItem } from '@/shared/ui/Tabs/Tabs';
import { ArticleTypeTabs } from '@/features/ArticleTabsTypes';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const view = useSelector(getArticlePageView) || ArticleView.SMALL;

  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlesPageType);

  const dispatch = useAppDispatch();
  const onViewSelect = useCallback(
    (newView: ArticleView) => {
      dispatch(articlePageActions.setView(newView));
    },

    [dispatch]
  );

  const fetchData = useCallback(() => {
    dispatch(fetchPageArticles({ replace: true }) as any);
  }, [dispatch]);

  const dobouncedFetchData = useDebounce(fetchData, 500);

  const onChangeOrder = useCallback(
    (value: SortOrder) => {
      dispatch(articlePageActions.setOrder(value));
      dispatch(articlePageActions.setPage(1));
      dobouncedFetchData();
    },
    [dispatch, dobouncedFetchData]
  );

  const onChangesSort = useCallback(
    (value: ArticleSortField) => {
      dispatch(articlePageActions.setSort(value));
      dispatch(articlePageActions.setPage(1));
      dobouncedFetchData();
    },
    [dispatch, dobouncedFetchData]
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlePageActions.setSearch(value));
      dobouncedFetchData();
    },
    [dispatch, dobouncedFetchData]
  );

  const onChangeTab = useCallback(
    (tab: TabItem) => {
      dispatch(articlePageActions.setType(tab.value as ArticleType));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [fetchData, dispatch]
  );
  return (
    <div className={clsx(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleViewSelector view={view} onViewSelect={onViewSelect} />
        <ArticleSortSelector
          onChangeOrder={onChangeOrder}
          order={order}
          sort={sort}
          onChangeSort={onChangesSort}
        />
      </div>
      <Card className={cls.search}>
        <Input value={search} onChange={onChangeSearch} placeholder='search' />
      </Card>
      <ArticleTypeTabs type={type} onChangeTab={onChangeTab} />
    </div>
  );
};

export default ArticlesPageFilters;
