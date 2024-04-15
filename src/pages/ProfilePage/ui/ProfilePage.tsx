import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './ProfilePage.module.scss';
import DynamicModuleLoader from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  profileReducer,
  Profile as PROF,
  profileActions,
  gerProfileErrors,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import ProfileCard from 'entities/Profile/ui/ProfileCard/Profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AsyncThunk } from '@reduxjs/toolkit';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading';
import { useSelector } from 'react-redux';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly';

import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import Text from 'shared/ui/Text/Text';

interface ProfilePageProps {
  className?: string;
}
const initialReducer = {
  profileSchema: profileReducer,
};

export const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  const validateErrors = useSelector(gerProfileErrors);

  useEffect(() => {
    dispatch(
      fetchProfileData() as unknown as AsyncThunk<
        PROF,
        void,
        ThunkConfig<string>
      >
    );
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (val: string) => {
      dispatch(profileActions.updateProfile({ first: val }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (val: string) => {
      dispatch(profileActions.updateProfile({ lastname: val }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (val: string) => {
      const numberVal = Number(val);
      if (!isNaN(numberVal)) {
        dispatch(
          profileActions.updateProfile({
            age: numberVal,
          })
        );
      }
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (val: string) => {
      dispatch(profileActions.updateProfile({ city: val }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (val: string) => {
      dispatch(profileActions.updateProfile({ username: val }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (val: string) => {
      dispatch(profileActions.updateProfile({ avatar: val }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (val: Currency) => {
      dispatch(profileActions.updateProfile({ currency: val }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (val: Country) => {
      dispatch(profileActions.updateProfile({ country: val }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={initialReducer}>
      <div className={clsx(cls, {}, [className])}>
        <ProfilePageHeader readonly={readonly} />
        {validateErrors?.map((error) => (
          <Text key={error} title={error} theme='error' />
        ))}
        <ProfileCard
          readonly={readonly}
          data={form}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
