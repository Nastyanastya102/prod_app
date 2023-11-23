import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { Reducerslist } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './Profilepage.module.scss';

const reducers: Reducerslist = {
    profile: profileReducer,
};

interface IProfilepageProps {
  className?: string
}

const ProfilePage = ({ className }: IProfilepageProps) => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames('', {}, [className])} />
    </DynamicModuleLoader>
);

export default ProfilePage;
