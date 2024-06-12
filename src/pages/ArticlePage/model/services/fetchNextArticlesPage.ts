import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNumber,
} from '../selectors/getArticlesPageSelectors';
import { articlePageActions } from '../slices/articlePageSlice';
import { fetchPageArticles } from './fetchPageArticles';

export const fetchNextArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>(
  'articles/fetchNextArticlesPage',
  async (_, { dispatch, rejectWithValue, getState }) => {
    const hasMore = getArticlePageHasMore(getState());
    const pageNum = getArticlePageNumber(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(pageNum + 1));
      dispatch(fetchPageArticles({ replace: false }) as any);
    }
  }
);
