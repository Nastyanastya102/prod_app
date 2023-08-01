import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    /* eslint no-restricted-globals: "error" */
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <h2>{t('Something went wrong')}</h2>
            <Button onClick={reloadPage}>
                {t('Reload page')}
            </Button>
        </div>
    );
};
