import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
const Main = () => {
  const { t } = useTranslation();

  return <Page> {t('main')}</Page>;
};

export default Main;
