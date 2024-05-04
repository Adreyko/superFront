import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import {
  getArticlePageLimit,
  getArticlePageNumber,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlesPageType,
} from '../selectors/getArticlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParama';

interface PageArticlesProps {
  replace?: boolean;
}

export const fetchPageArticles = createAsyncThunk<
  Article[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  PageArticlesProps,
  ThunkConfig<string>
>(
  'articles/fetchPageArticles',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    const limit = getArticlePageLimit(getState());

    const order = getArticlePageOrder(getState());
    const sort = getArticlePageSort(getState());
    const search = getArticlePageSearch(getState());
    const page = getArticlePageNumber(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        sort,
        order,
        search,
        type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          q: search,
          _order: order,
          _sort: sort,
          type: type === ArticleType.ALL ? undefined : type,
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
