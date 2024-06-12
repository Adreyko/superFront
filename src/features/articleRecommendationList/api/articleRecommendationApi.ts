import { rtkApi } from '@/shared/api/rtkApi';

const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList =
  articleRecommendationsApi.useGetArticleRecommendationsListQuery;
