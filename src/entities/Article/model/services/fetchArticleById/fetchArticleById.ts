import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';
import { api } from 'shared/api/api';

export const fetchArticleById = createAsyncThunk<
  Article,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string
>(
  'articleDetails/fetchArticleById',
  async (articleId, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
