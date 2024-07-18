import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleItemSkeleton } from './ArticleItemSkeleton';

interface ArticleItemProps {
  className?: string;
  article: Article;
  view: ArticleView
  isLoading?: boolean
}

export const ArticleItem = memo((props: ArticleItemProps) => {
    const { t } = useTranslation();
    const {
        view, article, className, isLoading,
    } = props;
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article, navigate]);

    const types = article.type.join(', ');
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (isLoading) {
        return new Array(
            view === ArticleView.SMALL ? 9 : 3,
        // eslint-disable-next-line react/no-array-index-key
        ).fill(0).map((_, index) => <div><ArticleItemSkeleton key={index} view={view} /></div>);
    }
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text text={article.user?.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    <Text text={types} className={cls.types} />
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && (<ArticleTextBlockComponent block={textBlock} />)}
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
                            {t('Read more...')}
                        </Button>
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={types} className={cls.types} />
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
