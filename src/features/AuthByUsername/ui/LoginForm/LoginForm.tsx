import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './LoginForm.module.scss';

import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ReactNode, useState } from 'react';
import Input from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
  children?: ReactNode;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const [value, setValue] = useState('');

  const onInputChange = (val: string) => {
    setValue(val);
  };
  return (
    <div className={clsx(cls.loginForm, {}, [className])}>
      <Input
        placeholder='Enter text'
        onChange={onInputChange}
        value={value}
        type='text'
      />
      <Input
        placeholder='Enter text'
        onChange={onInputChange}
        value={value}
        type='text'
      />

      <Button className={cls.loginBtn}>{t('login')}</Button>
    </div>
  );
};

export default LoginForm;
