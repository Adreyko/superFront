import RatingCard from '@/entities/Rating/ui/RatingCard/RatingCard';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getAuthData } from '@/entities/User';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { useCallback } from 'react';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const userData = useSelector(getAuthData);

  const { data, isLoading } = useArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (startsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: startsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onCancel = useCallback(
    (startsCount: number) => {
      handleRateArticle(startsCount);
    },
    [handleRateArticle]
  );

  const onAccept = useCallback(
    (startsCount: number, feedback?: string) => {
      handleRateArticle(startsCount, feedback);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width='100%' height='120' />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      title='Rate the article'
      feedbackTitle='Left your feedback'
      className={className}
      hasFeedback
    />
  );
};

export default ArticleRating;
