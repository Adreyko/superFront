import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) => {
  return state.ArticleDetailsSchemas?.recommendations?.isLoading;
};

export const getArticleRecommendationError = (state: StateSchema) => {
  return state.ArticleDetailsSchemas?.recommendations?.error;
};
