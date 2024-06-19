import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import RequiredAuth from './RequiredAuth';
import { AppRouterProps } from '@/shared/types/router';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
  const renderWithCallback = useCallback((router: AppRouterProps) => {
    return (
      <Route
        key={router.path}
        path={router.path}
        element={
          router.authOnly ? (
            <RequiredAuth roles={router.roles}>{router.element}</RequiredAuth>
          ) : (
            <>{router.element}</>
          )
        }
      />
    );
  }, []);
  const routes = Object.values(routeConfig).map(renderWithCallback);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
