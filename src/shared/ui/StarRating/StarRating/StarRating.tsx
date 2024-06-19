import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './StarRating.module.scss';
import Icon from '../../Icon/Icon';
import star from '@/shared/assets/icons/star.svg';
import { useState } from 'react';

interface StarRatingProps {
  className?: string;
  onSelect?: (startCount: number) => void;
  size?: number;
  selectedStars?: number;
}
const stars = [1, 2, 3, 4, 5];
export const StarRating = ({
  size = 30,
  selectedStars = 0,
  onSelect,
  className,
}: StarRatingProps) => {
  const [currentStarCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => {
    onSelect?.(currentStarCount);
    setCurrentStarsCount(starsCount);
    setIsSelected(true);
  };
  return (
    <div className={clsx(cls, {}, [className])}>
      {stars.map((number) => (
        <Icon
          onClick={() => onClick(number)}
          onMouseLeave={onLeave}
          onMouseEnter={() => onHover(number)}
          key={number}
          Svg={star}
          className={clsx(cls.starIcon, {
            [cls.hovered]: currentStarCount >= number,
          })}
          width={size}
          height={size}
        />
      ))}
    </div>
  );
};

export default StarRating;
