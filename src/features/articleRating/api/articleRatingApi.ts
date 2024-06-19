import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';
interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    rateArticle: build.mutation<void, RateArticleArg>({
      query: ({ userId, articleId, feedback, rate }) => ({
        url: '/article-ratings',
        method: 'POST',
        body: {
          userId,
          articleId,
          feedback,
          rate,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
