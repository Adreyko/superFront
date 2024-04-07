import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next';

interface NotFountProps {
className?: string;
}

export const NotFound = ({ className }: NotFountProps) => {
  const { t } = useTranslation()
  return (
       <div className={clsx(cls.notFound, {}, [className])}>
     {t('not_found')}
    </div>
  )
}

export default NotFound;
