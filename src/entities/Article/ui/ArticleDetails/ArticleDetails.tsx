import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetails.module.scss';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDatils';
import Text from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

const initialReducer: ReducerList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);

  let content;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width='200px'
          height='200px'
          border='50%'
        />
        <Skeleton className={cls.title} width='300px' height='32px' />
        <Skeleton className={cls.skeleton} width='600px' height='24px' />
        <Skeleton className={cls.skeleton} width='100%' height='200px' />
        <Skeleton className={cls.skeleton} width='100%' height='200px' />
      </>
    );
  } else if (error) {
    content = (
      <Text
        theme='error'
        textAlign='center'
        title='Something went wrong in article loading'
      />
    );
  } else {
    content = <div>details</div>;
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
      <div className={clsx(cls.articleDatils, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetails;
