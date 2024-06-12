import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './EditArticle.module.scss';
import DynamicModuleLoader, {
  ReducerList,
} from '@/shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsActions,
  articleDetailsReducer,
} from '@/entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsForm,
  getArticleDetailsReadonly,
} from '@/entities/Article/model/selectors/articleDatils';
import Input from '@/shared/ui/Input/Input';
import Button from '@/shared/ui/Button/Button';
import { updateArticleData } from '@/entities/Article/model/services/fetchArticleById/updateArticle';

interface EditArticleProps {
  className?: string;
  articleId: string;
}

const initReducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const EditArticle = ({ className, articleId }: EditArticleProps) => {
  const dispatch = useAppDispatch();

  const readOnly = useSelector(getArticleDetailsReadonly);
  const articles = useSelector(getArticleDetailsForm);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, [dispatch, articleId]);

  const onEdit = useCallback(() => {
    dispatch(articleDetailsActions.setReadOnly(false));
  }, [dispatch]);

  const onTittleChange = useCallback(
    (value: string) => {
      dispatch(articleDetailsActions.updateArticle({ title: value }));
    },
    [dispatch]
  );

  const onSave = useCallback(() => {
    dispatch(updateArticleData() as any);
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initReducers}>
      {' '}
      <Button onClick={onEdit} theme='clear' className={cls.editBtn}>
        edit
      </Button>
      <Button onClick={onSave} theme='clear' className={cls.editBtn}>
        save
      </Button>
      <div className={clsx(cls, {}, [className])}>
        <Input
          onChange={onTittleChange}
          className=''
          placeholder='edit tittle'
          value={articles?.title}
          readOnly={readOnly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default EditArticle;
