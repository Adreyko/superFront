import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const routes = Object.values(routeConfig).map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};

export default AppRouter;
