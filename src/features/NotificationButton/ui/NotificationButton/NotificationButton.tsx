import { FC, useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';

import NotificationIcon from '@/shared/assets/icons/call-20-20.svg';
import cls from './NotificationButton.module.scss';

import NotificationList from '@/entities/Notifications/ui/NotificationList/NotificationList';
import { AnimationProvider } from '@/shared/lib/componets/AnimationProvider/AnimationProvider';
import Button from '@/shared/ui/Button/Button';
import Drawer from '@/shared/ui/Drawer/Drawer';
import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon/Icon';

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton: FC<NotificationButtonProps> = ({
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenDrawer = () => {
    setIsOpen(true);
  };

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const trigger = (
    <Button onClick={onOpenDrawer} theme={'clear'}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover trigger={trigger} direction='bottom_left'>
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
};

export default NotificationButton;
