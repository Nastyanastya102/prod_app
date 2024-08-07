import {
    ChangeEvent, useMemo,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value?: T;
    content?: string;

}
interface SelectProps<T extends string> {
    label: string;
    className?: string;
    value?: T
    options?: SelectOptions<T>[];
    onChange?: (value: T) => void;
    readonly?: boolean
}

export const Select = <T extends string>({
    label, className, options, onChange, value, readonly,
}: SelectProps<T>) => {
    const mods: Mods = {
    };

    const optionList = useMemo(() => (options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
        </option>
    ))), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span>
                    {label}
                    &nbsp;
                </span>
            )}
            <select disabled={readonly} value={value} className={cls.select} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
};
