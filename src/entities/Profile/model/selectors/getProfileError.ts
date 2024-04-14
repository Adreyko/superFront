import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (profile: StateSchema) => {
  return profile.profileSchema?.error;
};
