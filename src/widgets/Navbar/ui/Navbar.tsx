/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.logo)} />
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={classNames(cls.links)}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                <div>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed et deserunt ducimus tenetur quam illum aliquam eum, cupiditate cum inventore labore voluptate cumque porro architecto quisquam! Ea at tempora debitis.
                </div>
            </Modal>
        </div>
    );
};
