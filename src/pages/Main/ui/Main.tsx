import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Main')}
            <Input
                onChange={onChange}
                value={value}
                placeholder={t('Enter text')}
            />
        </div>
    );
};

export default MainPage;
