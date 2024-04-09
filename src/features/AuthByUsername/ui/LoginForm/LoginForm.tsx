import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './LoginForm.module.scss';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ReactNode, memo, useCallback } from 'react';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Text from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
  children?: ReactNode;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const loginState = useSelector(getLoginState);

  const { username, password } = loginState;

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
    <div className={clsx(cls.loginForm, {}, [className])}>
      {loginState.error && <Text theme='error' text={t(loginState.error)} />}
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
        disabled={loginState.isLoading}
        onClick={onLogin}
        className={cls.loginBtn}
      >
        {t('login')}
      </Button>
    </div>
  );
});

LoginForm.displayName = 'LoginMemo';

export default LoginForm;
