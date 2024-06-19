import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addNewComment';
import {
  getArticleCommentsIsLoading,
  getArticleCommentsError,
} from '@/pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/services/addComentForArticle';
import { fetchArticleDetailsCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchArticleDetailsCommentsByArticleId';
import { getArticleComments } from '@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import Text from '@/shared/ui/Text/Text';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = ({
  className,
  id,
}: ArticleDetailsCommentsProps) => {
  const comments = useSelector(getArticleComments.selectAll);

  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  const dispatch = useAppDispatch();
  const onCommentSend = useCallback(() => {
    dispatch(addCommentForArticle() as any); // redux types is nightmare :(
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(fetchArticleDetailsCommentsByArticleId(id) as any);
  }, [dispatch, id]);

  return (
    <VStack gap='16' max>
      <Text title='Commentaries' />
      <AddCommentForm onSendComment={onCommentSend} />
      <CommentList isLoading={isLoading} comments={comments} error={error} />
    </VStack>
  );
};

export default ArticleDetailsComments;
