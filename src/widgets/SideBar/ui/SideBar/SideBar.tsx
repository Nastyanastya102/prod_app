import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme, AppLink } from 'shared/ui/AppLink/AppLink';

import { classNames } from 'shared/lib/className/classNames';
import { Button, ThemeButton, ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './SideBar.module.scss';

interface ISideBarProps {
    className?: string
}

export const SideBar = ({ className }: ISideBarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const toggeleSt = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggeleSt}
                className={cls.toggleBth}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink
                        to={RoutesPath.main}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={classNames(cls.link)}>
                            {t('Main')}
                        </span>
                    </AppLink>
                </div>
                <div>
                    <AppLink
                        to={RoutesPath.about}
                        className={cls.item}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={classNames(cls.link)}>
                            {t('About')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
