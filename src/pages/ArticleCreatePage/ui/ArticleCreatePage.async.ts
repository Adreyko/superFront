import { lazy } from 'react';

export const ArticleCreatePage = lazy(
  async () => await import('./ArticleCreatePage')
);
