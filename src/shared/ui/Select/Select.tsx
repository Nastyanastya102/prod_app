import { ChangeEvent, ReactNode, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
    value?: string;
    content?: string;

}
interface SelectProps {
    label: string;
    className?: string;
    options?: SelectOptions[];
    onChange?: (value: string) => void;
}

export const Select = memo(({
    label, className, options, onChange,
}: SelectProps) => {
    const mods: Mods = {
    };

    const optionList = useMemo(() => (options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
        </option>
    ))), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span>
                    {label}
                    &gt;
                </span>
            )}
            <select className={cls.select} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
});
