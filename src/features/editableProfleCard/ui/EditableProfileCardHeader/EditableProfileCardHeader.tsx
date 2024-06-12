import { t } from 'i18next';
import Button from '@/shared/ui/Button/Button';
import cls from './EditableProfileCardHeader.scss';
import Text from '@/shared/ui/Text/Text';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Profile, profileActions } from '@/entities/Profile';
import { updateProfileData } from '@/entities/Profile/model/services/updateProfileData';
import { AsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { getAuthData } from '@/entities/User';
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData';
import HStack from '@/shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
  className?: string;
  readonly?: boolean;
}

export const ProfilePageHeader = ({
  className,
  readonly,
}: ProfilePageHeaderProps) => {
  const dispatch = useAppDispatch();

  const authData = useSelector(getAuthData);
  const profileData = useSelector(getProfileData);

  // eslint-disable-next-line eqeqeq
  const canEdit = authData?.id == profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(
      updateProfileData() as unknown as AsyncThunk<
        Profile,
        void,
        ThunkConfig<string>
      >
    );
  }, [dispatch]);

  return (
    <HStack justify='between' max>
      <Text title={t('profile')} />
      {canEdit &&
        (readonly ? (
          <Button onClick={onEdit} theme='clear' className={cls.editBtn}>
            {t('edit')}
          </Button>
        ) : (
          <HStack gap='8'>
            <Button onClick={onCancelEdit} className={cls.btn} theme='warning'>
              {t('cancel')}
            </Button>
            <Button onClick={onSave} className={cls.btn} theme='primary'>
              {t('save')}
            </Button>
          </HStack>
        ))}
    </HStack>
  );
};

export default ProfilePageHeader;
