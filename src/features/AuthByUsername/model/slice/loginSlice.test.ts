import { loginReducer, loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('1244345'))).toEqual({ username: '1244345' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('1244345'))).toEqual({ password: '1244345' });
    });
});
