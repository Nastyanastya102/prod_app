/* eslint-disable i18next/no-literal-string */
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangesLastname?: (value?: string) => void;
    onChangeAge?: (value?: number) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangesLastname,
        readOnly,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t('Error occurred while loading profile data')}
                text={t('Try to reload page')}
                align={TextAlign.CENTER}
            />
        </div>;
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div>
                { data?.avatar && (
                    <div className={cls.AvatarWrapper}>
                        <Avatar src={data?.avatar} alt="userAvatar" />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your surname')}
                    className={cls.input}
                    onChange={onChangesLastname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Your city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Your username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Your image')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <Select
                    label="Enter curency"
                    options={[
                        { value: Currency.EUR, content: Currency.EUR },
                        { value: Currency.RUB, content: Currency.RUB },
                        { value: Currency.USD, content: Currency.USD },
                    ]}
                />
            </div>
        </div>
    );
};
