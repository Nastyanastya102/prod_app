import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }
    const {
        first, lastname, age, country,
    } = profile;

    const error: ValidateProfileErrors[] = [];

    if (!first || !lastname) {
        error.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(Number(age))) {
        error.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (!country) {
        error.push(ValidateProfileErrors.INCORRECT_COUNTRY);
    }

    return error;
};
