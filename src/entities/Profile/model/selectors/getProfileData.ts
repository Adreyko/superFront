import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (profile: StateSchema) => {
  return profile.profileSchema?.data;
};
