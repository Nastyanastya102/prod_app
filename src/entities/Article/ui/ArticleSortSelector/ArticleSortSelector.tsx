import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageView } from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticleSortSelector = (props: ArticlesPageFiltersProps) => {
    const {
        className, sort, order, onChangeSort, onChangeOrder,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Ascending'),
        },
        {
            value: 'desc',
            content: t('Descending'),
        },
    ], [t]);

    const sortOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Created'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select label={t('Sort')} options={sortOptions} value={sort} onChange={onChangeSort} />
            <Select
                label={t('by')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
};
