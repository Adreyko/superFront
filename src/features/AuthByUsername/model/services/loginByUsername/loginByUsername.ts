/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { api } from '@/shared/api/api';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localstorage';
interface LoginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async (loginData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await api.post<User>('/login', loginData);

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('loginError');
    }
  }
);
