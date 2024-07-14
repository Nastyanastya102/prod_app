import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/acticle';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({
    className,
    block,
}: ArticleCodeBlockComponentProps) => (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
        <Code text={block.code} />
    </div>
));
