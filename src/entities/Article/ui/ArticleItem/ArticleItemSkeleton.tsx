import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleItem.module.scss';

interface ArticleItemSkeletonProps {
  view: ArticleView
  className?: string
}

export const ArticleItemSkeleton = memo(({ view, className }: ArticleItemSkeletonProps) => {
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                {/* <Card className={cls.card}>
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
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card> */}
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />

            </Card>
        </div>
    );
});
