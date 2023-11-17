import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk, TestSyncThunk } from 'shared/lib/tests/testAsynkThunk/testAsynkThunk';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('getLoginUsername', () => {
    // let dispatch : Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test('fulfilled login', async () => {
    //     const userValue = { username: 'admin', id: '123' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: 'admin', password: '1234678893' });
    //     const result = TestSyncThunk();
    //     console.log(result);
    //     // result.payload
    //     expect(dispatch).toBeCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toBeCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toBe(userValue);
    // });

    // test('failed login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 430 }));
    //     const action = loginByUsername({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toBeCalledTimes(2);
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });

    test('fulfilled login', async () => {
        const userValue = { username: 'admin', id: '123' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userValue);
    });

    test('failed login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 430 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
