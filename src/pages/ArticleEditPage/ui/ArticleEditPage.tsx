import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page/Page';
import { useParams } from 'react-router-dom';
import EditArticle from '@/features/editArticle/ui/EditArticle';

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
    <Page className={clsx(cls, {}, [className])}>
      {isEdit ? <EditArticle articleId={id!} /> : 'Create'}
    </Page>
  );
};

export default ArticleEditPage;
