import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleDetailsCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsCommentsByArticleId';
import { AddCommentForm } from 'features/addNewComment';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addComentForArticle';
import { Page } from 'widgets/Page/Page';
import { getArticleDetailsRecommendation } from 'pages/ArticleDetailsPage/model/slices/articleDetailsRecommendationSlice';
import { fetchArticleDetailsRecommendations } from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsRecommendationts';
import { ArticleDetailsReducers } from 'pages/ArticleDetailsPage/model/slices';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const initReducers: ReducerList = {
  ArticleDetailsSchemas: ArticleDetailsReducers,
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(
    getArticleDetailsRecommendation.selectAll
  );
  const recommendationsIsLoading = useSelector(getArticleCommentsIsLoading);
  // const recommendationsError = useSelector(getArticleRecommendationError);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(fetchArticleDetailsCommentsByArticleId(id!) as any);
    dispatch(fetchArticleDetailsRecommendations() as any);
  }, [dispatch, id]);

  const onCommentSend = useCallback(() => {
    dispatch(addCommentForArticle() as any); // redux types is nightmare :(
  }, [dispatch]);

  if (!id) {
    return (
      <Page className={clsx(cls, {}, [className])}>Article not found</Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={initReducers}>
      <Page className={clsx(cls.wrapper, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <div className={cls.comment}>
          <Text title='Also to watch: ' />
          <ArticleList
            target='_blank'
            className={cls.recommendations}
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            view={ArticleView.SMALL}
          />
          <Text title='Commentaries' />
          <AddCommentForm onSendComment={onCommentSend} className={cls.input} />
          <CommentList
            isLoading={isLoading}
            comments={comments}
            error={error}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
