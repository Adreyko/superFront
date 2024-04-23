import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props} className={clsx(cls.card, {}, [className])}>
      {children}
    </div>
  );
};

export default Card;
