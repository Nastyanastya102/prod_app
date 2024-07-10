import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails = memo(({
    className,
}: ArticleDetailsProps) => {
    const { t } = useTranslation();
    return (
        <div />
    );
});
