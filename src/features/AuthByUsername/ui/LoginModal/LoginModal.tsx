import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './LoginModal.module.scss';
import Modal from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormLazy } from '../LoginForm/LoginForm.async';
import Loader from 'shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={clsx(cls, {}, [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
