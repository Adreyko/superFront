import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../selectors/getArticlesPageSelectors';
import { articlePageActions } from '../slices/articlePageSlice';
import { fetchPageArticles } from './fetchPageArticles';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  URLSearchParams,
  ThunkConfig<string>
>(
  'articles/initArticlesPage',
  async (searchParams, { dispatch, rejectWithValue, getState }) => {
    const inited = getArticlePageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;

      if (sortFromUrl) {
        dispatch(articlePageActions.setSort(sortFromUrl));
      }

      if (orderFromUrl) {
        dispatch(articlePageActions.setOrder(orderFromUrl));
      }

      if (searchFromUrl) {
        dispatch(articlePageActions.setSearch(searchFromUrl));
      }

      if (typeFromUrl) {
        dispatch(articlePageActions.setType(typeFromUrl));
      }

      dispatch(articlePageActions.initView());
      dispatch(fetchPageArticles({ replace: false }) as any);
    }
  }
);
