import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  const routes = Object.values(routeConfig).map(({ path, element }) => (
    <Route path={path} element={element} />
  ));

  return (
    <Suspense fallback={<div>loading..</div>}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};

export default AppRouter;
