import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';

interface ArticleArticleEditProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleArticleEditProps) => {
    const { t } = useTranslation('article-edit');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            {isEdit ? t('Edit article') : t('Create article')}
        </Page>
    );
};

export default ArticleEditPage;
