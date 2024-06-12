import { FC } from 'react';

import cls from './NotificationItem.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import Card from 'shared/ui/Card/Card';
import { clsx } from 'shared/lib/helpers/clsx/clsx';
import Text from 'shared/ui/Text/Text';
import { Notification } from 'entities/Notifications/model/types/notifications';
interface NotificationItemProps {
  className?: string;
  item: Notification;
}

const NotificationItem: FC<NotificationItemProps> = ({
  className = '',
  item,
}) => {
  const content = (
    <Card className={clsx(cls.notificationItem, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    <AppLink className={cls.link} to={item.href}>
      {content}
    </AppLink>;
  }

  return content;
};

export default NotificationItem;
