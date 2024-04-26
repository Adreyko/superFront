import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const About = () => {
  const { t } = useTranslation('about');
  return <Page>{t('about')}</Page>;
};

export default About;
