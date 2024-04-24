import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { Article, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/articlePage';
import { fetchPageArticles } from '../services/fetchPageArticles';
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/localstorage';

const articlesPageAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.ArticlesPageSchema || articlesPageAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesPageAdapter.getInitialState<ArticlePageSchema>({
    entities: {},
    ids: [],
    error: undefined,
    isLoading: false,
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView(state, action: PayloadAction<ArticleView>) {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY, action.payload);
    },
    initView(state) {
      const view = localStorage.getItem(
        ARTICLE_VIEW_STORAGE_KEY
      ) as ArticleView;
      state.view = view;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPageArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchPageArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesPageAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchPageArticles.rejected, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.payload!;
        state.isLoading = false;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } =
  articlesPageSlice;
