import React, { useState } from 'react';
import { classNames } from 'shared/lib/className/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface ISideBarProps {
  className?: string
}

export const SideBar = ({ className }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggeleSt = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            {/* <button data-testid="sidebar-toggle" onClick={toggeleSt}>Toggel</button> */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
