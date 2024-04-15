

import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './[FTName].module.scss';

interface  [FTName]Props { 
className?: string;
}

export const  [FTName] = ({ className }:  [FTName]Props) => {
  return (
       <div className={clsx(cls, {}, [className])}>
      [FTName]
    </div>
  )
}

export default  [FTName];