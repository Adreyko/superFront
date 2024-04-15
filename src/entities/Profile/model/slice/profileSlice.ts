import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly(state, action: PayloadAction<boolean>) {
      state.readonly = action.payload;
    },
    cancelEdit(state) {
      state.readonly = true;
      state.form = state.data;
      state.validateError = undefined;
    },
    updateProfile(state, action: PayloadAction<Profile>) {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.validateError = undefined;
          state.data = action.payload;
          state.form = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
          state.readonly = true;
        }
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.validateError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
