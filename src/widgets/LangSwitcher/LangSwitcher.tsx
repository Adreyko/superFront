import { clsx } from 'shared/lib/helpers/clsx/clsx';
import Button from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
  variant?: 'short' | 'full';
}

const fullLanguage: Record<string, string> = {
  en: 'English',
  ua: 'Ukrainian',
};

export const LangSwitcher = memo(
  ({ className, variant }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    return (
      <Button
        theme='primary'
        onClick={async () =>
          await i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        className={clsx(cls.langSwitcher, {}, [className])}
      >
        {variant === 'short' ? i18n.language : fullLanguage[i18n.language]}
      </Button>
    );
  }
);

LangSwitcher.displayName = 'LangSwitcher';

export default LangSwitcher;
