import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleDetailsPageHeader.module.scss';
import Button from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDatils';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RouterPath.articles);
  }, [navigate]);
  const canEdit = useSelector(getCanEditArticle);

  const articles = useSelector(getArticleDetailsData);

  const onEditArticle = useCallback(() => {
    navigate(`${RouterPath.articles_details}${articles?.id}/edit`);
  }, [articles?.id, navigate]);

  return (
    <div className={clsx(cls.header, {}, [className])}>
      {' '}
      <Button theme='outline' onClick={onBackToList}>
        Back to articles
      </Button>
      {canEdit && (
        <Button theme='outline' onClick={onEditArticle} className={cls.editBtn}>
          Edit
        </Button>
      )}
    </div>
  );
};

export default ArticleDetailsPageHeader;
