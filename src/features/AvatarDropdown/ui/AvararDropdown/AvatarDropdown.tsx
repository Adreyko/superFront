import { AppDispatch } from '@/app/providers/StoreProvider';
import { getAuthData, userActions } from '@/entities/User';
import {
  getIsUserAdmin,
  getIsUserManager,
} from '@/entities/User/model/selectors/roleSelector';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RouterPath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import Avatar from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown: FC<AvatarDropdownProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);
  const authData = useSelector(getAuthData);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={clsx('', {}, [className])}
      direction='bottom_left'
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('admin'),
                href: RouterPath.admin_panel,
              },
            ]
          : []),
        {
          content: t('profile'),
          href: `${RouterPath.profile}${authData.id}`,
        },
        {
          content: t('signOut'),
          onClick: onLogOut,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
};

export default AvatarDropdown;
