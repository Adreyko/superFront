import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileForm = (profile: StateSchema) => {
  return profile.profileSchema?.form;
};
