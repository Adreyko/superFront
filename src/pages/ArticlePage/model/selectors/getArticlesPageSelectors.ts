import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageIsLoading = (state: StateSchema) => {
  return state.ArticlesPageSchema?.isLoading;
};

export const getArticlePageError = (state: StateSchema) => {
  return state.ArticlesPageSchema?.error;
};

export const getArticlePageView = (state: StateSchema) => {
  return state.ArticlesPageSchema?.view;
};
