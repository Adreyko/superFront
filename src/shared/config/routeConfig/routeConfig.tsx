import { About, Main, ProfilePage } from 'pages';
import { ArticlePageDetails } from 'pages/ArticleDetailsPage';
import { ArticlePage } from 'pages/ArticlePage';
import { NotFound } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export type AppRouterProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',

  NOT_FOUND = 'NOT_FOUND',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/', //  + id
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <Main />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <About />,
  },
  [AppRoutes.PROFILE]: {
    path: RouterPath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },

  [AppRoutes.ARTICLES]: {
    path: RouterPath.articles,
    element: <ArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${RouterPath.articles_details}:id`,
    element: <ArticlePageDetails />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.NOT_FOUND,
    element: <NotFound />,
  },
};
