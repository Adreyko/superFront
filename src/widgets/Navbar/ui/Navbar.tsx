/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Button from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { clsx } from 'shared/lib/helpers/clsx/clsx';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpened, setAuthModalOpened] = useState(false);

  const onToggleModal = () => {
    setAuthModalOpened((prev) => !prev);
  };

  return (
    <div className={clsx(cls.navbar, {}, [className])}>
      <Button className={cls.loginBtn} theme='primary' onClick={onToggleModal}>
        {t('login')}
      </Button>
      <Modal onClose={onToggleModal} isOpen={authModalOpened}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officiis
        delectus vel, impedit necessitatibus obcaecati, dolore cupiditate
        numquam corporis maiores voluptates, iste unde quo a? Animi nihil earum
        necessitatibus vitae?
      </Modal>
    </div>
  );
};
