import { About, Main, ProfilePage } from 'pages';
import { NotFound } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export type AppRouterProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  NOT_FOUND = 'NOT_FOUND',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

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

  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.NOT_FOUND,
    element: <NotFound />,
  },
};
