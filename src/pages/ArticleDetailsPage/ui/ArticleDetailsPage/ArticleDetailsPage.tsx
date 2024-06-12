import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import DynamicModuleLoader, {
  ReducerList,
} from '@/shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';

import { Page } from '@/widgets/Page/Page';
import { ArticleDetailsReducers } from '@/pages/ArticleDetailsPage/model/slices';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import VStack from '@/shared/ui/Stack/VStack/VStack';

interface ArticleDetailsPageProps {
  className?: string;
}

const initReducers: ReducerList = {
  ArticleDetailsSchemas: ArticleDetailsReducers,
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Page className={clsx(cls, {}, [className])}>Article not found</Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={initReducers}>
      <Page className={clsx(cls.wrapper, {}, [className])}>
        <VStack max gap='16'>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
