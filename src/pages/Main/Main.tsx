import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import RatingCard from '@/entities/Rating/ui/RatingCard/RatingCard';
const Main = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {' '}
      {t('main')} <RatingCard title='lol' hasFeedback />{' '}
    </Page>
  );
};

export default Main;
