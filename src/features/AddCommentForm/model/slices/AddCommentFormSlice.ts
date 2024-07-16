import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const AddCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(loginByUsername.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(loginByUsername.fulfilled, (state) => {
        //         state.isLoading = false;
        //     })
        //     .addCase(loginByUsername.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

// Action creators are generated for each case reducer function
export const { actions: AddCommentFormActions } = AddCommentFormSlice;
export const { reducer: AddCommentFormReducer } = AddCommentFormSlice;
