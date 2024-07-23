import {
    fetchProfileData,
    getProfileFormData,
    getProfileError, getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
    getProfileValidationErrors,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilepageProps {
  className?: string
}

const ProfilePage = ({ className }: IProfilepageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validationError = useSelector(getProfileValidationErrors);
    const error = useSelector(getProfileError);

    const validateErrorTranslates = {
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некоректний вік'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некоректна країна'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Некоректне ім\'я'),
        [ValidateProfileErrors.NO_DATA]: t('Відсутні данні'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Серверна помилка'),
    };

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangesLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: value || 0 }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value || Currency.EUR }));
    }, [dispatch]);

    const onChangeCounty = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({ country: value || Country.Ukraine }));
    }, [dispatch]);

    useInitialEffect(() => id && dispatch(fetchProfileData(id)));

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validationError?.map((err: keyof typeof ValidateProfileErrors) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangesLastname={onChangesLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCounty={onChangeCounty}
                    readOnly={readonly}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
