/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './Icon.module.scss'
interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

 const Icon: FC<IconProps> = ({
  className = '',
  Svg,
  inverted = false,
  ...otherProps
}) => {
  return (
    <Svg
      className={clsx(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
      {...otherProps}
    />
  );
};
export default Icon
