import { lazy } from 'react';

export const ArticlePageDetails = lazy(
  async () => await import('./ArticleDetailsPage')
);
