import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';

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

export const getArticlePageInited = (state: StateSchema) => {
  return state.ArticlesPageSchema?._inited;
};

export const getArticlePageOrder = (state: StateSchema) => {
  return state.ArticlesPageSchema?.order || 'asc';
};
export const getArticlePageSort = (state: StateSchema) => {
  return state.ArticlesPageSchema?.sort || ArticleSortField.TITLE;
};

export const getArticlePageSearch = (state: StateSchema) => {
  return state.ArticlesPageSchema?.search;
};

export const getArticlesPageType = (state: StateSchema) => {
  return state.ArticlesPageSchema?.type ?? ArticleType.ALL;
};
