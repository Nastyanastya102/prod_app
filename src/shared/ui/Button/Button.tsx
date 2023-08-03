import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/className/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={
                classNames(
                    cls.button,
                    { [cls.square]: square, [cls[size]]: true },
                    [className, cls[theme]],
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
