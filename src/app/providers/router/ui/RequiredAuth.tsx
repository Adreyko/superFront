import { getAuthData } from 'entities/User';
import { getIsMounted } from 'entities/User/model/selectors/getIsMounted';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

interface RequiredAuthProps {
  className?: string;
  children?: ReactNode;
}

export const RequiredAuth = ({ className, children }: RequiredAuthProps) => {
  const isAuth = useSelector(getAuthData);
  const location = useLocation();
  const isMounted = useSelector(getIsMounted);

  if (!isAuth && isMounted) {
    return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
