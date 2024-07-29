import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaverSchema } from '../types/scrollSaverSchema';

const initialState: ScrollSaverSchema = {
    scroll: {},
};

export const scrollSaverSlices = createSlice({
    name: 'scrollsaver',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollSaverActions } = scrollSaverSlices;
export const { reducer: scrollSaverReducer } = scrollSaverSlices;
