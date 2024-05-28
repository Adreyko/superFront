import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './AriclePage.module.scss';
import { memo, useCallback } from 'react';

import { articlePageReducer } from 'pages/ArticlePage/model/slices/articlePageSlice';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from 'pages/ArticlePage/model/services/fetchNextArticlesPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';

interface AriclePageProps {
  className?: string;
}

const initReducers: ReducerList = {
  ArticlesPageSchema: articlePageReducer,
};

export const ArticlePage = ({ className }: AriclePageProps) => {
  const dispatch = useAppDispatch();
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage() as any);
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={initReducers}>
      <Page onScrollEnd={onLoadNextPart} className={clsx(cls, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
