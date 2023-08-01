import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { AppLinkTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.logo)} />
            <div className={classNames(cls.links)}>
                <AppLink to="/" className={classNames(cls.mainLink)} theme={AppLinkTheme.SECONDARY}>
                    {t('Main')}
                </AppLink>
                <AppLink to="about">
                    {' '}
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
