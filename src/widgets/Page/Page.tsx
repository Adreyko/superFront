/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './Page.module.scss';
import {
  LegacyRef,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useTrottle';
import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollPosition, scrollActions } from 'features/scrollRestoration';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPosition(state, pathname)
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget) {
      dispatch(
        scrollActions.setScrollPosition({
          path: pathname,
          position: e.currentTarget.scrollTop,
        })
      );
    }
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={clsx(cls.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd ? (
        <div
          className={cls.trigger}
          ref={triggerRef as LegacyRef<HTMLDivElement> | undefined}
        />
      ) : null}
    </main>
  );
};
