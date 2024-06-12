import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';
import { Article } from '@/entities/Article';
import { fetchArticleDetailsRecommendations } from '../services/fetchArticleDetailsRecommendationts';

const articleDetailsRecommendationAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticleDetailsRecommendation =
  articleDetailsRecommendationAdapter.getSelectors<StateSchema>(
    (state) =>
      state.ArticleDetailsSchemas?.recommendations ||
      articleDetailsRecommendationAdapter.getInitialState()
  );

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsRecommendation',
  initialState:
    articleDetailsRecommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>(
      {
        entities: {},
        ids: [],
        error: undefined,
        isLoading: false,
      }
    ),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleDetailsRecommendations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchArticleDetailsRecommendations.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articleDetailsRecommendationAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchArticleDetailsRecommendations.rejected, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.payload!;
        state.isLoading = false;
      });
  },
});

export const { reducer: articleDetailsRecommendationReducer } =
  articleDetailsCommentsSlice;
