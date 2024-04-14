import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';
import { getProfileForm } from '../selectors/getProfileForm';
import { api } from 'shared/api/api';

export const updateProfileData = createAsyncThunk<
  Profile,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    const updatedData = getProfileForm(getState());
    try {
      const response = await api.put<Profile>('/profile', updatedData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
