import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPasswordState } from './getLoginPassword';

describe('getLoginLoading', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1234678893',
            },
        };
        expect(getLoginPasswordState(state as StateSchema)).toEqual('1234678893');
    });

    test('should work with empy state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPasswordState(state as StateSchema)).toEqual('');
    });
});
