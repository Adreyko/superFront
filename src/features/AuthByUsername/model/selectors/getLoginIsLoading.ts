import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getLoginIsLoading = (state: StateSchema) =>
  state?.loginSchema?.isLoading ?? false;
