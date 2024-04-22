import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleDetailsCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsCommentsByArticleId';
import { AddCommentForm } from 'features/addNewComment';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addComentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

const initReducers: ReducerList = {
  articleCommentSchema: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleDetailsCommentsByArticleId(id!) as any);
  }, [dispatch, id]);

  const onCommentSend = useCallback(() => {
    dispatch(addCommentForArticle() as any); // redux types is nightmare :(
  }, [dispatch]);

  if (!id) {
    return <div className={clsx(cls, {}, [className])}>Article not found</div>;
  }

  return (
    <DynamicModuleLoader reducers={initReducers}>
      <div className={clsx(cls.wrapper, {}, [className])}>
        <ArticleDetails id={id} />
        <div className={cls.comment}>
          <Text title='Commentaries' />
          <AddCommentForm onSendComment={onCommentSend} className={cls.input} />
          <CommentList
            isLoading={isLoading}
            comments={comments}
            error={error}
          />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
