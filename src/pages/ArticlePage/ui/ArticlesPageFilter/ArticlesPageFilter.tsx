import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageView } from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { articlesPageActions } from '../../model/slices/ArticlePageSlice';
import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <Select label={t('Sort by')} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Search')} />
            </Card>
        </div>
    );
};
