import { Article } from './article';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
  form?: Partial<Article>;
  readOnly: boolean;
}
