import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import cls from './NotFound.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFound)}>{t('Page is not found')}</div>
    );
};

export default NotFoundPage;
