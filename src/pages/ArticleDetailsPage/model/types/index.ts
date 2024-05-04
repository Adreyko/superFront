import { ArticleDetailsRecommendationSchema } from './articleDetailsRecommendationSchema';
import { ArticleCommentSchema } from './commentSchema';

export interface ArticleDetailsPageSchemas {
  comments: ArticleCommentSchema;
  recommendations: ArticleDetailsRecommendationSchema;
}
