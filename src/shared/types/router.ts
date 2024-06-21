import { UserRole } from '@/entities/User/model/const/userConsts';
import { RouteProps } from 'react-router-dom';

export type RouteAppProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
