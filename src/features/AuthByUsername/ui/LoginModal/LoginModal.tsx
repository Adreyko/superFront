import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './LoginModal.module.scss';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};
