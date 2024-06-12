import { memo } from 'react';
import cls from './Overlay.module.scss';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay = memo((props: OverlayProps) => {
  const { className = '', onClick } = props;

  return (
    <div onClick={onClick} className={clsx(cls.Overlay, {}, [className])} />
  );
});

Overlay.displayName = 'Overlay';

export default Overlay;
