import { CSSProperties, useMemo } from 'react';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: string | number;
}

export const Avatar = ({ className, src, alt, size }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );
  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={clsx('', {}, [className])}
    />
  );
};

export default Avatar;
