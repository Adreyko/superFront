import { useNotifications } from '../../api/notificationApi';
import { FC, useMemo } from 'react';

import NotificationItem from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className = '' }) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  const notificationList = useMemo(
    () =>
      notifications?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      )),
    [notifications]
  );

  if (isLoading) {
    return (
      <VStack
        gap='16'
        max
        className={clsx(cls.notificationList, {}, [className])}
      >
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
      </VStack>
    );
  }

  return (
    <VStack
      gap='16'
      max
      className={clsx(cls.notificationList, {}, [className])}
    >
      {notificationList}
    </VStack>
  );
};

export default NotificationList;
