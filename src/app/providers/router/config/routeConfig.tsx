import { ArticlePage } from '@/pages/ArticlePage';

import { ArticleEditPage } from '@/pages/ArticleEditPage';

import { AppRoutes, RouterPath } from '@/shared/const/router';
import { About, Main, ProfilePage } from '@/pages';
import { RouteAppProps } from '@/shared/types/router';
import { ArticlePageDetails } from '@/pages/ArticleDetailsPage';
import AdminPanel from '@/pages/AdminPanelPage/ui/AdminPanel';
import { UserRole } from '@/entities/User/model/const/userConsts';
import { NotFound } from '@/pages/NotFound';

export const routeConfig: Record<AppRoutes, RouteAppProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <Main />,
    authOnly: false,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <About />,
    authOnly: false,
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
  [AppRoutes.ARTICLE_CREATE]: {
    path: RouterPath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RouterPath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: RouterPath.articles_details,
    element: <ArticlePageDetails />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RouterPath.admin_panel,
    element: <AdminPanel />,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: RouterPath.forbidden,
    element: <div>forbidden</div>,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFound />,
    authOnly: false,
  },
};
