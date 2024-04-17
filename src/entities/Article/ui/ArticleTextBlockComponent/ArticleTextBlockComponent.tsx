

import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './ArticleTextBlockComponent.module.scss';

interface  ArticleTextBlockComponentProps { 
className?: string;
}

export const  ArticleTextBlockComponent = ({ className }:  ArticleTextBlockComponentProps) => {
  return (
       <div className={clsx(cls, {}, [className])}>
      ArticleTextBlockComponent
    </div>
  )
}

export default  ArticleTextBlockComponent;