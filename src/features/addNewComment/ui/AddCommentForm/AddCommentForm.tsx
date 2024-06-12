import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './AddCommentForm.module.scss';
import Input from '@/shared/ui/Input/Input';
import Button from '@/shared/ui/Button/Button';
import DynamicModuleLoader, {
  ReducerList,
} from '@/shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import {
  addCommentActions,
  addCommentReducer,
} from '@/features/addNewComment/model/slices/addCommentSlice';
import { useSelector } from 'react-redux';
import { getAddCommentText } from '@/features/addNewComment/selectors/addCommentSelectors';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (val: string) => void;
}

const initReducers: ReducerList = {
  AddCommentFormSchema: addCommentReducer,
};

export const AddCommentForm = ({
  className,
  onSendComment,
}: AddCommentFormProps) => {
  const text = useSelector(getAddCommentText);

  const dispatch = useAppDispatch();

  const handleCommentText = useCallback(
    (val: string) => {
      dispatch(addCommentActions.setText(val));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text!);
    handleCommentText('');
  }, [handleCommentText, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
      <div className={clsx(cls.addComment, {}, [className])}>
        <Input
          onChange={handleCommentText}
          value={text}
          placeholder='type new comment'
        />
        <Button onClick={onSendHandler}>Send message</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
