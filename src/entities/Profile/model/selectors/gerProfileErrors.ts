import { StateSchema } from '@/app/providers/StoreProvider';

export const gerProfileErrors = (state: StateSchema) => {
  return state.profileSchema?.validateError;
};
