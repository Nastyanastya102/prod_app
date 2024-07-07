import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

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
    test('successfull validation', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without user firstname and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('invalid age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('invalid age', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });

    test('invalid all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA, ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.INCORRECT_COUNTRY]);
    });
});
