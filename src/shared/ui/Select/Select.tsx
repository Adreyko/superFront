import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './Select.module.scss';
import React, { useCallback, useMemo } from 'react';
export interface SelectOptions<T extends string> {
  content: string;
  value: T;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: Array<SelectOptions<T>>;
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const optionsList = useMemo(() => {
    return options.map((opt) => (
      <option value={opt.value} key={opt.value} className={cls.option}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    },
    [onChange]
  );

  return (
    <div
      className={clsx(cls.wrapper, { [cls.readonly]: readonly }, [className])}
    >
      {label && (
        <span className={cls.label}>
          {label}
          {'>'}
        </span>
      )}
      <select
        disabled={readonly}
        onChange={onChangeHandler}
        value={value}
        className={cls.select}
      >
        {optionsList}
      </select>
    </div>
  );
};

export default Select;
