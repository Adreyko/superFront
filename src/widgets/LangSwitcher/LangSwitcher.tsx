import { clsx } from 'shared/lib/helpers/clsx/clsx';
import Button from 'shared/ui/Button/Button';
import i18n from 'shared/config/i18n/i18n';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const language = i18n.language;

  return (
    <Button
      onClick={async () => await i18n.changeLanguage(language === 'en' ? 'ua' : 'en')}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      className={clsx('', {}, [className])}
    >
      {language}
    </Button>
  );
};

export default LangSwitcher;
