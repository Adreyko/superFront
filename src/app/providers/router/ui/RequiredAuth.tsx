import { getAuthData } from '@/entities/User';
import { UserRole } from '@/entities/User/model/const/userConsts';
import { getIsMounted } from '@/entities/User/model/selectors/getIsMounted';
import { getAllRoles } from '@/entities/User/model/selectors/roleSelector';
import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RouterPath } from '@/shared/config/routeConfig/routeConfig';

interface RequiredAuthProps {
  children?: ReactNode;
  roles?: UserRole[];
}

export const RequiredAuth = ({ children, roles }: RequiredAuthProps) => {
  const isAuth = useSelector(getAuthData);
  const location = useLocation();
  const isMounted = useSelector(getIsMounted);
  const userRoles = useSelector(getAllRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!hasRequiredRoles) {
    return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
  }

  if (!isAuth && isMounted) {
    return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
