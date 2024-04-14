import { getAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getAuthData);
  const routes = useMemo(
    () =>
      Object.values(routeConfig)
        .filter((router) => (router.authOnly ? isAuth : true))
        .map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        )),
    [isAuth]
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
