import { CSSProperties, FC, memo } from 'react';

import cls from './Skeleton.module.scss';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = memo(
  ({ className = '', height, width, border }: SkeletonProps) => {
    const styles: CSSProperties = {
      width,
      height,
      borderRadius: border,
    };
    return (
      <div style={styles} className={clsx(cls.skeleton, {}, [className])} />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
