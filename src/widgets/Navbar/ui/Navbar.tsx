import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.logo)} />
            <div className={classNames(cls.links)} />
        </div>
    );
};
