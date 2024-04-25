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

export const getArticlePageLimit = (state: StateSchema) => {
  return state.ArticlesPageSchema?.limit || 9;
};

export const getArticlePageNumber = (state: StateSchema) => {
  return state.ArticlesPageSchema?.page || 1;
};

export const getArticlePageHasMore = (state: StateSchema) => {
  return state.ArticlesPageSchema?.hasMore;
};
