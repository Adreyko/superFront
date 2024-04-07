import { About, Main } from 'pages';
import { NotFound } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'NOT_FOUND'
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <Main />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <About />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.NOT_FOUND,
    element: <NotFound/>,
  },
};
