/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Mods, clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './Modal.module.scss';
import {
  ReactNode,
  MouseEvent,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import Portal from '../Portal/Portal';
import { useTheme } from '@/app/providers/ThemeProvider';

export interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
const ANIMATION_DELAY = 500;
export const Modal = ({
  className,
  children,
  lazy,
  isOpen,
  onClose,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout> | undefined>();
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div className={clsx(cls.modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
