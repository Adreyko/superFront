import { clsx } from 'shared/lib/helpers/clsx/clsx';

import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import Button from '../Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  codeValue: string;
}

export const Code = ({ className, codeValue }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(codeValue);
  }, [codeValue]);
  return (
    <pre className={clsx(cls.code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{codeValue}</code>
    </pre>
  );
};

export default memo(Code);
