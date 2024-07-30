import { ArticleType } from 'entities/Article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onTabHandler: (tab: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { value, className, onTabHandler } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Economics'),
        },
        {
            value: ArticleType.IT,
            content: t('It'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science'),
        },
    ], [t]);

    const onTabChange = useCallback((tab: TabItem) => {
        onTabHandler(tab.value as ArticleType);
    }, [onTabHandler]);

    return (
        <Tabs
            tabs={typeTabs}
            onTabClick={onTabChange}
            value={value}
            className={classNames('', {}, [className])}
        />
    );
};
