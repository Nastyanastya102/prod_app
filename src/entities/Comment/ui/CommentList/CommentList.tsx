import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[]
    isLoading?: boolean
}
export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {
                comments.length
                    ? (comments.map((comment) => (
                        <CommentCard className={cls.comment} comment={comment} key={comment.id} />
                    )))
                    : <Text text={t('No comments')} />
            }
        </div>
    );
};
