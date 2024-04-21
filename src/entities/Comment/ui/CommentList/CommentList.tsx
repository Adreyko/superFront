import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './CommentList.module.scss';
import CommentCard from '../CommentCard/CommentCard';
import { Comment } from 'entities/Comment/model/types/comments';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList = ({
  className,
  comments,
  isLoading,
  error,
}: CommentListProps) => {
  if (!comments?.length) {
    return <div className={clsx(cls, {}, [className])}>No comments now</div>;
  }
  return (
    <div className={clsx(cls.commentList, {}, [className])}>
      {comments.map((comment) => (
        <CommentCard
          error={error}
          isLoading={isLoading}
          className={cls.comment}
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  );
};
