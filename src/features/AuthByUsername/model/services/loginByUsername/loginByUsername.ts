import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';
interface LoginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async (loginData, thunkAPI) => {
    console.log(loginData);
    try {
      const response = await axios.post(
        'http://localhost:8000/login',
        loginData
      );
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(response.data)
      );
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('loginError');
    }
  }
);
