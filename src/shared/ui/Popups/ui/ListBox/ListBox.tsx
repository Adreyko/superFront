import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';

import { mapDirectionClasses } from '../../consts/consts';
import popupCls from '../../styles/Popup.module.scss';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import Button from '@/shared/ui/Button/Button';
import HStack from '@/shared/ui/Stack/HStack/HStack';
import { DropdownDirection } from '@/shared/types';
export interface LabelOption<T extends string> {
  value?: T;
  content?: string;
}

export interface ListboxItem extends LabelOption<string> {
  disabled?: boolean;
}

interface ListboxProps {
  value?: string;
  defaultValue?: string;
  items?: ListboxItem[];
  onChange?: <T extends string>(value: T) => void;
  className?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const Listbox: React.FC<ListboxProps> = (props: ListboxProps) => {
  const {
    items = [],
    value,
    defaultValue,
    onChange,
    className = '',
    readonly = false,
    direction = 'bottom_right',
    label,
  } = props;

  const additionalClasses = [mapDirectionClasses[direction]];

  return (
    <HStack gap='4'>
      {label && (
        <span
          className={clsx(cls.label, { [cls.disabled]: readonly }, [])}
        >{`${label}>`}</span>
      )}
      <HListBox
        disabled={readonly}
        as='div'
        className={clsx(cls.listBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as='div' className={cls.trigger}>
          <Button theme='outline' disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={clsx(cls.options, {}, additionalClasses)}>
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={clsx(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: Boolean(item.disabled),
                    },
                    []
                  )}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};

export default Listbox;
