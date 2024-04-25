import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

interface NotFountProps {
  className?: string;
}

export const NotFound = ({ className }: NotFountProps) => {
  const { t } = useTranslation();
  return (
    <Page className={clsx(cls.notFound, {}, [className])}>
      {t('not_found')}
    </Page>
  );
};

export default NotFound;
