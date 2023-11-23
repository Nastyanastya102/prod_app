import {
    fetchProfileData, ProfileCard, profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { Reducerslist } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/userAppDispatch/userAppDispatch';
import cls from './Profilepage.module.scss';

const reducers: Reducerslist = {
    profile: profileReducer,
};

interface IProfilepageProps {
  className?: string
}

const ProfilePage = ({ className }: IProfilepageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])} />
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
