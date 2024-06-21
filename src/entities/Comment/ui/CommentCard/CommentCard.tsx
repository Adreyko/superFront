import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import { Comment } from '@/entities/Comment/model/types/comments';
import cls from './CommentCard.module.scss';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Text from '@/shared/ui/Text/Text';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
  error?: string;
}

export const CommentCard = ({
  className,
  comment,
  isLoading,
}: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={clsx(cls.commentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width='30px' height='30px' border='50%' />
          <Skeleton height='16px' width='100px' className={cls.username} />
        </div>
        <Skeleton width='100%' height='50px' className={cls.text} />
      </div>
    );
  }
  return (
    <div className={clsx(cls.commnetCard, {}, [className])}>
      <AppLink
        to={getRouteProfile(comment?.user.id ?? '')}
        className={cls.header}
      >
        <div>{comment?.user.id}</div>
        <Avatar size={30} src={comment?.user.avatar} />
        <Text title={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} />
    </div>
  );
};

export default CommentCard;
