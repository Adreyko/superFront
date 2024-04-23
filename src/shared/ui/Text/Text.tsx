import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Text.module.scss';
import { FC, memo } from 'react';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: 'primary' | 'error';
  textAlign?: 'right' | 'left' | 'center';
  size?: 'normal' | 'xl' | 'large';
}

const Text: FC<TextProps> = memo(
  ({ title, theme, text, textAlign = 'left', size, className }: TextProps) => {
    return (
      <div
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        className={clsx(cls.text, {}, [
          className,
          cls[theme ?? 'primary'],
          cls[textAlign],
          cls[size ?? 'normal'],
        ])}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);

Text.displayName = 'Text';

export default Text;
