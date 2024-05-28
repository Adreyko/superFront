import cls from './ArticleRecommendationList.module.scss';
import { memo } from 'react';
import Text from 'shared/ui/Text/Text';
import { ArticleList, ArticleView } from 'entities/Article';
import VStack from 'shared/ui/Stack/VStack/VStack';
import { useArticleRecommendationsList } from 'features/articleRecommendationList/api/articleRecommendationApi';

interface ArticleRecommendationListProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ArticleRecommendationList = memo(
  (props: ArticleRecommendationListProps) => {
    const { data: articles, isLoading } = useArticleRecommendationsList(3);

    return (
      <VStack gap='8'>
        <Text title='Also to watch:' />
        <ArticleList
          target='_blank'
          className={cls.recommendations}
          articles={articles}
          isLoading={isLoading}
          view={ArticleView.SMALL}
        />
      </VStack>
    );
  }
);
