import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView
}

export const ArticleList = memo(({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
}: ArticleListProps) => {
    const rendetItem = (article: Article) => (
        <ArticleItem className={cls.card} key={article.id} article={article} view={view} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(rendetItem) : null}
        </div>
    );
});
