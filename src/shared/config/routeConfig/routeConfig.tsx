import { UserRole } from '@/entities/User/model/const/userConsts';
import { About, Main, ProfilePage } from '@/pages';
import AdminPanel from '@/pages/AdminPanelPage/ui/AdminPanel';
import { ArticlePageDetails } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { NotFound } from '@/pages/NotFound';
import { RouteProps } from 'react-router-dom';

export type AppRouterProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  ARTICLES_CREATE = 'article_create',
  ARTICLES_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',

  NOT_FOUND = 'NOT_FOUND',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + id,
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/', //  + id
  [AppRoutes.ARTICLES_CREATE]: '/articles/new',
  [AppRoutes.ARTICLES_EDIT]: 'articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin',
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
    path: `${RouterPath.profile}:id`,
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
  [AppRoutes.ARTICLES_CREATE]: {
    path: RouterPath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: RouterPath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RouterPath.admin_panel,
    element: <AdminPanel />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.NOT_FOUND,
    element: <NotFound />,
  },
};
