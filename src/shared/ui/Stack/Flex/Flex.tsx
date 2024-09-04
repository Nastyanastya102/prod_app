import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between' | 'evenly';
export type FlexAlign = 'center' | 'start' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '56' | '64';

const justifyMap: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    evenly: cls.justifyAround,
};
const alignMap: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
    stretch: cls.alignStretch,
};
const directionMap: Record<FlexDirection, string> = {
    row: cls.row,
    column: cls.column,
};

const gapMap: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    20: cls.gap20,
    24: cls.gap24,
    32: cls.gap32,
    40: cls.gap40,
    48: cls.gap48,
    56: cls.gap56,
    64: cls.gap64,
};

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?:FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className, children, justify, align = 'center', direction, gap, max,
    } = props;

    const classes = [
        className,
        justify && justifyMap[justify],
        align && alignMap[align],
        direction && directionMap[direction],
        gap && gapMap[gap],
    ];

    const mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
};
