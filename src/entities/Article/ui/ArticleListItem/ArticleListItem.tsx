import { clsx } from '@/shared/lib/helpers/clsx/clsx';

import cls from './ArticleListItem.module.scss';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import Text from '@/shared/ui/Text/Text';
import Icon from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye-outlined.svg';
import Card from '@/shared/ui/Card/Card';
import { useHover } from '@/shared/lib/hooks/useHover';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Button from '@/shared/ui/Button/Button';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RouterPath } from '@/shared/config/routeConfig/routeConfig';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = ({
  className,
  article,
  view,
  target,
}: ArticleListItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHover, bindHover] = useHover();

  const types = <Text text={article.type.join(', ')} className={cls.type} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.SMALL) {
    return (
      <AppLink
        to={RouterPath.articles_details + article.id}
        target={target}
        {...bindHover}
        className={clsx(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <img src={article.img} className={cls.img} alt={article.title} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text className={cls.title} title={article.title} />
        </Card>
      </AppLink>
    );
  }

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT
  ) as ArticleTextBlock;

  return (
    <div className={clsx(cls.articleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.header}>
          <Avatar size={30} src={article.user.avatar} />
          <Text text={article.user.username} className={cls.username} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <Text text={article.title} className={cls.title} />
        {types}
        <img src={article.img} className={cls.img} alt={article.title} />
        {textBlock && (
          <ArticleTextBlockComponent
            block={textBlock}
            className={cls.textBlock}
          />
        )}
        <a className={cls.footer}>
          <AppLink
            to={RouterPath.articles_details + article.id}
            target={target}
          >
            <Button theme='outline'>Continue reading...</Button>
          </AppLink>
          {views}
        </a>
      </Card>
    </div>
  );
};

export default ArticleListItem;
