import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Select.module.scss';
import React, { useCallback, useMemo } from 'react';
interface SelectOptions {
  content: string;
  value: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = ({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps) => {
  const optionsList = useMemo(() => {
    return options.map((opt) => (
      <option value={opt.value} key={opt.value} className={cls.option}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
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
