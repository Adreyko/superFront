import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableProfleCardSchema } from '../types/editableProfleCardSchema';

const initialState: EditableProfleCardSchema = {
    
};

export const editableProfleCardSlice = createSlice({
    name: 'editableProfleCard',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: editableProfleCardActions } = editableProfleCardSlice;
export const { reducer: editableProfleCardReducer } = editableProfleCardSlice;