import { Currency } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import cls from './CurrencySelect.module.scss';

interface CurrencySelecetProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void
  readonly?: boolean
}
const option = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelecetProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames(cls.CurrencySelect, {}, [className])}
            label={t('Enter curency')}
            options={option}
            value={value as string}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
