import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Text.module.scss';
import { FC, memo } from 'react';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: 'primary' | 'error';
}

const Text: FC<TextProps> = memo(({ title, theme, text }: TextProps) => {
  return (
    <div className={clsx(cls.text, {}, [cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

Text.displayName = 'Text';

export default Text;
