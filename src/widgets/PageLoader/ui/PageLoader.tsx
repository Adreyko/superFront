import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './PageLoader.module.scss';
import Loader from '@/shared/ui/Loader/Loader';

interface PageLoaderProps {
className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
       <div className={clsx(cls.pageLoader, {}, [className])}>
     <Loader/>
    </div>
  )
}

export default PageLoader;
