import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string,
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (profileId, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>('/profile/' + profileId);

      console.log(response.data);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
