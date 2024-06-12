/* eslint-disable react/jsx-props-no-spreading */
import React, {
  FC,
  InputHTMLAttributes,
  SyntheticEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
}

const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className = '',
    type = 'text',
    placeholder = '',
    autofocus,
    readOnly = false,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isCaretVisible = !readOnly && isFocused;

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
      setIsFocused(true);
    }
  }, [autofocus]);

  const mods: Record<string, boolean> = {
    [cls.readonly]: readOnly,
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e.target as HTMLInputElement;
    setCaretPosition(target.selectionStart || 0);
  };

  return (
    <div className={clsx(cls.inputWrapper, mods, [className])}>
      <div className={cls.placeholder}>{placeholder + '>'}</div>
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readOnly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 7}px` }}
          ></span>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
