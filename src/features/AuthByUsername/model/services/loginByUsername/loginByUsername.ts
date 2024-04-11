/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';
interface LoginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (loginData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', loginData);

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setAuthData(response.data));

      extra.navigate('/about');
      return response.data;
    } catch (error) {
      return rejectWithValue('loginError');
    }
  }
);
