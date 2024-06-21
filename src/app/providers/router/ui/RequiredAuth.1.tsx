import { getAuthData } from '@/entities/User';
import { getIsMounted } from '@/entities/User/model/selectors/getIsMounted';
import { getAllRoles } from '@/entities/User/model/selectors/roleSelector';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RequiredAuthProps } from './RequiredAuth';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

export const RequiredAuth = ({ children, roles }: RequiredAuthProps) => {
  const isAuth = useSelector(getAuthData);
  const isMounted = useSelector(getIsMounted);
  const userRoles = useSelector(getAllRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteMain()} replace />;
  }

  if (!isAuth && isMounted) {
    return <Navigate to={getRouteForbidden()} replace />;
  }
  return children;
};
