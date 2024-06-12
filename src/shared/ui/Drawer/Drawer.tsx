/* eslint-disable react/jsx-props-no-spreading */

import { FC, memo, ReactNode, useCallback, useEffect } from 'react';
import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import cls from './Drawer.module.scss';

import { useModal } from '@/shared/lib/hooks/useModal';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/componets/AnimationProvider/AnimationProvider';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent: FC<DrawerProps> = memo((props: DrawerProps) => {
  const { className = '', children, onClose, isOpen, lazy = false } = props;
  const { Spring, Gesture } = useAnimationLibs();
  const { a, useSpring, config } = Spring;
  const { useDrag } = Gesture;
  const [{ y }, api] = useSpring(() => ({ y: height }));

  const { isClosing, isMounted, closeModal } = useModal({
    onClose,
    isOpen,
    animationDelay: 300,
  });

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false, config: config.stiff });
  }, [api, config.stiff]);

  const closeDrawer = useCallback(
    (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...config.stiff, velocity },
        onResolve: onClose,
      });
    },
    [api, config.stiff, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
      if (oy < -70) cancel();

      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0)
          ? closeDrawer(vy)
          : openDrawer();
      } else {
        api.start({ y: oy, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  if (lazy && !isMounted) {
    return null;
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: Boolean(isOpen),
    [cls.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={clsx(cls.Drawer, mods, [className, 'app_drawer'])}>
        <Overlay onClick={closeModal} />
        <a.div
          {...bind()}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          className={cls.sheet}
        >
          {children}
        </a.div>
      </div>
    </Portal>
  );
});

DrawerContent.displayName = 'DrawerContent';

const DrawerAsync: FC<DrawerProps> = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

const Drawer: FC<DrawerProps> = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
