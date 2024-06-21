import { CSSProperties, FC, useMemo } from 'react';

import cls from './Avatar.module.scss';
import AppImage from '../AppImage/AppImage';
import UserIcon from '../../assets/icons/profile-32-32.svg';
import Icon from '../Icon/Icon';
import Skeleton from '../Skeleton/Skeleton';
import { Mods, clsx } from '@/shared/lib/helpers/clsx/clsx';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

const Avatar: FC<AvatarProps> = ({
  className = '',
  src,
  alt = 'somePhoto',
  size = 40,
  fallbackInverted = false,
}) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = (
    <Skeleton width={`${size}px`} height={`${size}px`} border={'50%'} />
  );
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      errorFallback={errorFallback}
      fallback={fallback}
      className={clsx(cls.avatar, mods, [className])}
      src={src}
      alt={alt}
      style={styles}
    />
  );
};

export default Avatar;
