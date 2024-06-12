import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getAuthData = (authData: StateSchema) => {
  return authData.user.authData;
};
