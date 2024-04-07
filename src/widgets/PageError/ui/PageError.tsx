import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

interface PageErrorProps {
className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }
  return (
       // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
       <div className={clsx(cls.pageError, {}, [className])}>
           {/* Something went wrong, please reload page! */}
           {t('page_error')}
           <Button onClick={reloadPage}>
            {t('reload')}
           </Button>
    </div>
  )
}

export default PageError;
