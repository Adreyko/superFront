import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) =>
  state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) =>
  state.articleDetails?.error;

export const getArticleDetailsReadonly = (state: StateSchema) =>
  state.articleDetails?.readOnly;

export const getArticleDetailsForm = (state: StateSchema) =>
  state.articleDetails?.form;
