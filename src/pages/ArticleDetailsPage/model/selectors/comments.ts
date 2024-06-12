import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
  return state.ArticleDetailsSchemas?.comments?.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
  return state.ArticleDetailsSchemas?.comments?.error;
};
