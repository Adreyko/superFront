import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleDetailsRecommendations = createAsyncThunk<
  Article[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>(
  'articles/fetchArticleDetailsRecommendations',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 8,
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
