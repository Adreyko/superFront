import { ArticleList, ArticleView } from '@/entities/Article';
import {
  getArticlePageIsLoading,
  getArticlePageView,
} from '@/pages/ArticlePage/model/selectors/getArticlesPageSelectors';
import { initArticlesPage } from '@/pages/ArticlePage/model/services/initArticlesPage';
import { getArticles } from '@/pages/ArticlePage/model/slices/articlePageSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = ({
  className,
}: ArticleInfiniteListProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView) || ArticleView.SMALL;
  const articles = useSelector(getArticles.selectAll);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(initArticlesPage(searchParams) as any);
  }, [dispatch, searchParams, view]);

  return <ArticleList isLoading={isLoading} view={view} articles={articles} />;
};

export default ArticleInfiniteList;
