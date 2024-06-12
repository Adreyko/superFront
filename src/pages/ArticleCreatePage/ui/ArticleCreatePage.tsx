import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './ArticleCreate.module.scss';

interface ArticleCreatePageProps {
  className?: string;
}

export const ArticleCreatePage = ({ className }: ArticleCreatePageProps) => {
  return <div className={clsx(cls, {}, [className])}>ArticleCreatePage</div>;
};

export default ArticleCreatePage;
