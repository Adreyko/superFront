import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { api } from '@/shared/api/api';
import {
  getArticleDetailsData,
  getArticleDetailsForm,
} from '../../selectors/articleDatils';
import { Article } from '../../types/article';

export const updateArticleData = createAsyncThunk<
  Article,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>(
  'article/updateArticleData',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    const updatedData = getArticleDetailsForm(getState());

    const data = getArticleDetailsData(getState());

    try {
      const response = await api.put<Article>(
        `/articles/${data?.id}`,
        updatedData
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
