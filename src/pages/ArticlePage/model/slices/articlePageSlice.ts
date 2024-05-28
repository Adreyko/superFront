import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from 'entities/Article';
import { ArticlePageSchema } from '../types/articlePage';
import { fetchPageArticles } from '../services/fetchPageArticles';
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';

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
    page: 1,
    limit: 0,
    hasMore: false,
    _inited: false,
    order: 'asc',
    sort: ArticleSortField.CREATED,
    search: '',
    type: ArticleType.ALL,
  }),
  reducers: {
    setView(state, action: PayloadAction<ArticleView>) {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY, action.payload);
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    initView(state) {
      const view = localStorage.getItem(
        ARTICLE_VIEW_STORAGE_KEY
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 12;
      state._inited = true;
    },
    setOrder(state, action: PayloadAction<SortOrder>) {
      state.order = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<ArticleSortField>) {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPageArticles.pending, (state, action) => {
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesPageAdapter.removeAll(state);
        }
      })
      .addCase(fetchPageArticles.fulfilled, (state, action) => {
        state.isLoading = false;

        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesPageAdapter.setAll(state, action.payload);
        } else {
          articlesPageAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchPageArticles.rejected, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.payload!;
        state.isLoading = false;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } =
  articlesPageSlice;
