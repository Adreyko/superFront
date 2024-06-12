import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile, ProfileValidateError } from '../types/profile';
import { getProfileForm } from '../selectors/getProfileForm';
import { api } from '@/shared/api/api';
import { validateProfile } from './validatedProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
  Profile,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<ProfileValidateError[]>
>(
  'profile/updateProfileData',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    const updatedData = getProfileForm(getState());

    const errors = validateProfile(updatedData);
    const formData = getProfileForm(getState());

    if (errors.length) {
      return rejectWithValue(errors);
    }
    try {
      const response = await api.put<Profile>(
        `/profile/${formData?.id}`,
        updatedData
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue([ProfileValidateError.NO_DATA]);
    }
  }
);
