import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => {
  return <Svg className={clsx(cls.icon, {}, [className])} />;
};

export default Icon;
