import { AxiosInstance } from 'axios';
import { ProfileSchema } from './../../../../entities/Profile/model/types/profile';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CountSchema } from 'entities/Counter/model/types/counterSchema';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleCommentSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addNewComment';
import { ArticlePageSchema } from 'pages/ArticlePage/model/types/articlePage';
import { IScrollRestorationSchema } from 'features/scrollRestoration';
export interface StateSchema {
  counter: CountSchema;
  user: UserSchema;
  scroll: IScrollRestorationSchema;

  // async reducers
  loginSchema?: LoginSchema;
  profileSchema?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleCommentSchema?: ArticleCommentSchema;
  AddCommentFormSchema?: AddCommentFormSchema;
  ArticlesPageSchema?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
