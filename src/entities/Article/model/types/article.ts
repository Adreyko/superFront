import { User } from '@/entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  user: User;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}
