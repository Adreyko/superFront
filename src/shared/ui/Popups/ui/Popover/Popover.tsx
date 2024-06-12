import { FC, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import cls from './Popover.module.scss';

import { mapDirectionClasses } from '../../consts/consts';
import popupCls from '../../styles/Popup.module.scss';
import { clsx } from 'shared/lib/helpers/clsx/clsx';
import { DropdownDirection } from 'shared/types';

interface PopoverProps {
  className?: string;
  children: ReactNode;
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const Popover: FC<PopoverProps> = ({
  className = '',
  trigger,
  direction = 'bottom_right',
  children,
}) => {
  const menuClasses = [mapDirectionClasses[direction]];
  return (
    <HPopover className={clsx(cls.popover, {}, [className, popupCls.popup])}>
      <HPopover.Button as='div' className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={clsx(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};

export default Popover;
