import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = memo(({
    className,
}: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div />
    );
});
