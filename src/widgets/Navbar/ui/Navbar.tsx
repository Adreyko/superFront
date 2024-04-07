/* eslint-disable @typescript-eslint/no-unsafe-argument */
import cls from './Navbar.module.scss';
import { clsx } from 'shared/lib/helpers/clsx/clsx';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={clsx(cls.navbar, {}, [className])}>
        none
    </div>
  );
};
