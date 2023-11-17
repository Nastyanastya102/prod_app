import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoadingState } from './getLoginLoading';

describe('getLoginLoading', () => {
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoadingState(state as StateSchema)).toEqual(true);
    });

    test('should work with empy state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoadingState(state as StateSchema)).toEqual(false);
    });
});
