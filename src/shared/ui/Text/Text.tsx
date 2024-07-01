import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right'
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const modes = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, modes, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
