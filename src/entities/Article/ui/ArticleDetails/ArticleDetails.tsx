import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetails.module.scss';
import DynamicModuleLoader, {
  ReducerList,
} from '@/shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsError,
  getArticleDetailsIsLoading,
  useArticleDetailsData,
} from '@/entities/Article/model/selectors/articleDatils';
import Text from '@/shared/ui/Text/Text';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import Avatar from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-outlined.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import Icon from '@/shared/ui/Icon/Icon';
import {
  ArticleBlock,
  ArticleBlockType,
} from '@/entities/Article/model/types/article';
import ArticleCodeComponent from '../ArticleCodeComponent/ArticleCodeComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

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
  const data = useArticleDetailsData();

  let content;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((articleBlock: ArticleBlock) => {
    switch (articleBlock.type) {
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={articleBlock.id}
            className=''
            block={articleBlock}
          />
        );
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeComponent
            key={articleBlock.id}
            className=''
            block={articleBlock}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={articleBlock.id}
            className=''
            block={articleBlock}
          />
        );
      default:
        return null;
    }
  }, []);
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
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={data?.img} className={cls.avatar} />
        </div>
        <Text title={data?.title} text={data?.subtitle} />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text size='large' className={cls.title} text={String(data?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text size='large' className={cls.title} text={data?.createdAt} />
        </div>
        <div className={cls.blockWrapper}>{data?.blocks.map(renderBlock)}</div>
      </>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
      <div className={clsx(cls.articleDatils, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetails;
