import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDatils';
import { Comment } from 'entities/Comment';
import { getAuthData } from 'entities/User';
import { getAddCommentText } from 'features/addNewComment';

import { api } from 'shared/api/api';
import { fetchArticleDetailsCommentsByArticleId } from './fetchArticleDetailsCommentsByArticleId';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const addCommentForArticle = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (commentText, { dispatch, extra, rejectWithValue, getState }) => {
    try {
      const userData = getAuthData(getState());
      const commentText = getAddCommentText(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !commentText || !article) {
        return rejectWithValue('no data');
      }

      const response = await api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData.id,
        text: commentText,
      });

      dispatch(fetchArticleDetailsCommentsByArticleId(article.id));

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('loginError');
    }
  }
);
