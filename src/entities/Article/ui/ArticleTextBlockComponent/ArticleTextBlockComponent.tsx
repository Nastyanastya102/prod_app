import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(({
    className,
}: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div />
    );
});
