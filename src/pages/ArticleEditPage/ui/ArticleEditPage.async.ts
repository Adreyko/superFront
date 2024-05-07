import { lazy } from 'react';

export const ArticleEditPage = lazy(
  async () => await import('./ArticleEditPage')
);
