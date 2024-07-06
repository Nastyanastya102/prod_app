import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/country';

interface CountrySelecetProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void
  readonly?: boolean
}
const option = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Belarus },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelecetProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Enter country')}
            options={option}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
