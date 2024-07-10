import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = memo(({
    className,
}: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div />
    );
});
