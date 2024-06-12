import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileState = (profile: StateSchema) => {
  return profile.profileSchema;
};
