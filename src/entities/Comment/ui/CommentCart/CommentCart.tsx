import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Comment } from '../../model/types/comment';
import cls from './CommentCart.module.scss';

interface CommentCartProps {
    className?: string;
    comment?: Comment
    isLoading?: boolean
}
export const CommentCart = (props: CommentCartProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.header}>
                {comment.user?.avatar && <Avatar size={30} src={comment.user?.avatar} />}
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
};
