import { clsx } from 'shared/lib/helpers/clsx/clsx';
import Button from 'shared/ui/Button/Button';
import i18n from 'shared/config/i18n/i18n';
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string;
  variant?: 'short' | 'full'
}

const fullLanguage: Record<string, string> = {
  en: 'English',
  ua: 'Ukrainian'
}

export const LangSwitcher = ({ className, variant }: LangSwitcherProps) => {
  const language = i18n.language;
  return (
    <Button
      theme='primary'
      onClick={async () => await i18n.changeLanguage(language === 'en' ? 'ua' : 'en')}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      className={clsx(cls.langSwitcher, {}, [className])}
    >
      {variant === 'short' ? language : fullLanguage[language]}
    </Button>
  );
};

export default LangSwitcher;
