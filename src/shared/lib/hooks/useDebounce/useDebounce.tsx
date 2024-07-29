import {
    MutableRefObject, useCallback, useRef,
} from 'react';

export interface DebounceOptions {
    callback: (...args: any[]) => void;
    delay: number;
}

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timer = useRef() as MutableRefObject<any | null>;

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback();
        }, delay);
    }, [callback, delay]);
};
