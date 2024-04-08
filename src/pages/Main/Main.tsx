import Counter from 'entities/Counter/ui/Counter';
import { useTranslation } from 'react-i18next';
const Main = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('main')}
      <Counter />
      ``
    </div>
  );
};

export default Main;
