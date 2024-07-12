import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article } from '../types/acticle';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const acrticleDetailsSlice = createSlice({
    name: 'acrticleDetails',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: acrticleDetailsActions } = acrticleDetailsSlice;
export const { reducer: acrticleDetailsReducer } = acrticleDetailsSlice;
