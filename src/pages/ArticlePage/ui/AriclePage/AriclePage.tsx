import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './AriclePage.module.scss';
import { memo, useCallback, useEffect } from 'react';
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import {
  getArticlePageIsLoading,
  getArticlePageView,
} from 'pages/ArticlePage/model/selectors/getArticlesPageSelectors';
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from 'pages/ArticlePage/model/slices/articlePageSlice';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchPageArticles } from 'pages/ArticlePage/model/services/fetchPageArticles';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlePage/model/services/fetchNextArticlesPage';

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

  useEffect(() => {
    dispatch(articlePageActions.initView());
    dispatch(fetchPageArticles({ page: 1 }) as any);
  }, [dispatch, view]);

  const onViewSelect = useCallback(
    (newView: ArticleView) => {
      dispatch(articlePageActions.setView(newView));
    },

    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage() as any);
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initReducers}>
      <Page onScrollEnd={onLoadNextPart} className={clsx(cls, {}, [className])}>
        <ArticleViewSelector view={view} onViewSelect={onViewSelect} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
