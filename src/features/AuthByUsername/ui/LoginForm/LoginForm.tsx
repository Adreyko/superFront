import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { ReactNode, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername';
import Input from 'shared/ui/Input/Input';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import Button from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
export interface LoginFormProps {
  className?: string;
  children?: ReactNode;
}

const initialReducer = {
  loginSchema: loginReducer,
};

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onUsernameChange = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username));
    },
    [dispatch]
  );

  const onPasswordChange = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducer}>
      <div className={clsx(cls.loginForm, {}, [className])}>
        {error && <Text theme='error' text={t(error)} />}
        <Input
          onChange={onUsernameChange}
          placeholder='Enter username'
          type='text'
          value={username}
        />
        <Input
          onChange={onPasswordChange}
          placeholder='Enter password'
          type='text'
          value={password}
        />
        <Button
          theme='primaryInverted'
          disabled={isLoading}
          onClick={onLogin}
          className={cls.loginBtn}
        >
          {t('login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginMemo';

export default LoginForm;
