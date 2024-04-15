import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getIsMounted = (authData: StateSchema) => {
  return authData.user._mounted;
};
