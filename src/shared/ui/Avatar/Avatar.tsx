import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = ({
    className, src, alt, size,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img src={src} className={classNames(cls.Avatar, {}, [className])} alt={alt} style={styles} />
    );
};
