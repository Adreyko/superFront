import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './AriclePage.module.scss';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import {
  getArticlePageIsLoading,
  getArticlePageView,
} from 'pages/ArticlePage/model/selectors/getArticlesPageSelectors';
import {
  articlePageReducer,
  getArticles,
} from 'pages/ArticlePage/model/slices/articlePageSlice';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlePage/model/services/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlePage/model/services/initArticlesPage';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

interface AriclePageProps {
  className?: string;
}

const initReducers: ReducerList = {
  ArticlesPageSchema: articlePageReducer,
};

export const ArticlePage = ({ className }: AriclePageProps) => {
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView) || ArticleView.SMALL;
  const articles = useSelector(getArticles.selectAll);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(initArticlesPage(searchParams) as any);
  }, [dispatch, searchParams, view]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage() as any);
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initReducers}>
      <Page onScrollEnd={onLoadNextPart} className={clsx(cls, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
