import { ArticleCommentSchema } from 'pages/ArticleDetailsPage';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { fetchArticleDetailsCommentsByArticleId } from '../services/fetchArticleDetailsCommentsByArticleId';

const commentAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
  (state) => state.articleCommentSchema || commentAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentAdapter.getInitialState<ArticleCommentSchema>({
    entities: {},
    ids: [],
    error: undefined,
    isLoading: false,
    data: [],
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleDetailsCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchArticleDetailsCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          // state.validateError = undefined;
          commentAdapter.setAll(state, action.payload);
          state.data = action.payload;
        }
      )
      .addCase(
        fetchArticleDetailsCommentsByArticleId.rejected,
        (state, action) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          state.error = action.payload!;
          state.isLoading = false;
        }
      );
  },
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
