import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './Page.module.scss';
import { LegacyRef, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });
  return (
    <main ref={wrapperRef} className={clsx(cls.page, {}, [className])}>
      {children}
      <div ref={triggerRef as LegacyRef<HTMLDivElement> | undefined} />
    </main>
  );
};
