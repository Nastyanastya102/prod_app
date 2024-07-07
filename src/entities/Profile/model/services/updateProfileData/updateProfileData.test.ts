import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileErrors } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
    username: 'admin',
    age: 29,
    country: Country.Ukraine,
    lastname: 'Stacy',
    first: 'Kl',
    city: 'SJ',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('successfully update profile', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('with server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });
    test('with validation error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });
        const result = await thunk.callThunk();
        expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });
});
