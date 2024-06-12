import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const AdminPanel = () => {
  const { t } = useTranslation('AdminPanel');
  return <Page>{t('AdminPanel')}</Page>;
};

export default AdminPanel;
