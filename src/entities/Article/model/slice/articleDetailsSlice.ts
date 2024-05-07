import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { updateArticleData } from '../services/fetchArticleById/updateArticle';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  readOnly: true,
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    updateArticle(state, action: PayloadAction<Partial<Article>>) {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
    setReadOnly(state, action: PayloadAction<boolean>) {
      state.readOnly = action.payload;
    },
    cancelEdit(state) {
      state.readOnly = true;
      state.form = state.data;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          // state.validateError = undefined;
          state.form = action.payload;
          state.data = action.payload;
          state.readOnly = true;
        }
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })
      .addCase(updateArticleData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readOnly = true;
      })
      .addCase(updateArticleData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateArticleData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
