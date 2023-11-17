import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginErrorState } from './getLoginError';

describe('getLoginError', () => {
    test('should return an error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginErrorState(state as StateSchema)).toEqual('error');
    });

    test('should work with empy state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginErrorState(state as StateSchema)).toEqual(undefined);
    });
});
