import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDatils';
import { getAuthData } from '@/entities/User';

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }
    return article.id === user.id;
  }
);
