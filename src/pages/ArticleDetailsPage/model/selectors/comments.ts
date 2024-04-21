import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
  return state.articleCommentSchema?.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
  return state.articleCommentSchema?.error;
};
