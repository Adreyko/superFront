import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../selectors/getArticlesPageSelectors';

interface PageArticlesProps {
  page: number;
  limit?: number;
}

export const fetchPageArticles = createAsyncThunk<
  Article[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  PageArticlesProps,
  ThunkConfig<string>
>(
  'articles/fetchPageArticles',
  async ({ page = 1 }, { dispatch, extra, rejectWithValue, getState }) => {
    const limit = getArticlePageLimit(getState());
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
