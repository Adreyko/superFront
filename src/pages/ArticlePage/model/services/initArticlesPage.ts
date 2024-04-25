import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../selectors/getArticlesPageSelectors';
import { articlePageActions } from '../slices/articlePageSlice';
import { fetchPageArticles } from './fetchPageArticles';

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>(
  'articles/initArticlesPage',
  async (_, { dispatch, rejectWithValue, getState }) => {
    const inited = getArticlePageInited(getState());
    console.log(2);
    if (!inited) {
      dispatch(articlePageActions.initView());
      dispatch(fetchPageArticles({ page: 1 }) as any);
    }
  }
);
