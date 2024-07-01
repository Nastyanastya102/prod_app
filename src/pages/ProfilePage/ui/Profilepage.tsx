import {
    fetchProfileData,
    getProfileFormData,
    getProfileError, getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './Profilepage.module.scss';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilepageProps {
  className?: string
}

const ProfilePage = ({ className }: IProfilepageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    const error = useSelector(getProfileError);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangesLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: number) => {
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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
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
                    readOnly={readonly}
                />
            </div>

        </DynamicModuleLoader>
    );
};

export default ProfilePage;
