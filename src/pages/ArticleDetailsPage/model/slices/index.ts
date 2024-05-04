import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchemas } from '../types';
import { articleDetailsRecommendationReducer } from './articleDetailsRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';

export const ArticleDetailsReducers =
  combineReducers<ArticleDetailsPageSchemas>({
    recommendations: articleDetailsRecommendationReducer,
    comments: articleDetailsCommentsReducer,
  });
