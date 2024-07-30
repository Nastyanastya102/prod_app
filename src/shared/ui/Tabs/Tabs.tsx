import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string
    tabs: TabItem[];
    value: string;
    onTabClick: (value: TabItem) => void;
}
export const Tabs = (props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;

    const onClickHandler = (item: TabItem) => () => onTabClick(item);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.length && tabs.map((item) => (
                <Card
                    theme={item.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    className={cls.tab}
                    key={item.value}
                    onClick={onClickHandler(item)}
                >
                    {item.content}
                </Card>
            ))}
        </div>
    );
};
