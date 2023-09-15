/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/className/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface IModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: IModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { theme } = useTheme();
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeRef.current);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modalContainer, mods, [className, theme, 'app_modal'])}>
                <div className={classNames(cls.overlay)} onClick={closeHandler}>
                    <div
                        className={classNames(cls.content)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
