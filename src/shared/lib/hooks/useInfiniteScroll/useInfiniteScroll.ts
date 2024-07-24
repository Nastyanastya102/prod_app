import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;

}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerRefElement = triggerRef.current;
        const wrapperRefElement = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperRefElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerRefElement);
        }

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
        };
    }, [wrapperRef, triggerRef, callback]);
};
