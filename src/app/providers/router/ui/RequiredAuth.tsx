import { UserRole } from '@/entities/User/model/const/userConsts';
import { ReactNode } from 'react';
import { RequiredAuth } from './RequiredAuth.1';

export interface RequiredAuthProps {
  children?: ReactNode;
  roles?: UserRole[];
}

export default RequiredAuth;
