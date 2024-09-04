import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[]
    isLoading?: boolean
}
export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" className={classNames('', {}, [className])}>
                <Text text={t('Loading comments')} />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {
                comments?.length
                    ? (comments.map((comment) => (
                        <CommentCard comment={comment} key={comment.id} />
                    )))
                    : <Text text={t('No comments')} />
            }
        </VStack>
    );
};
