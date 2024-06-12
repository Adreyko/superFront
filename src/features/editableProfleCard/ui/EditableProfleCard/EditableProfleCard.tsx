import { AsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country/model/types/country';
import { Currency } from '@/entities/Currency';
import {
  profileReducer,
  fetchProfileData,
  profileActions,
  Profile,
  gerProfileErrors,
} from '@/entities/Profile';
import { getProfileError } from '@/entities/Profile/model/selectors/getProfileError';
import { getProfileForm } from '@/entities/Profile/model/selectors/getProfileForm';
import { getProfileIsLoading } from '@/entities/Profile/model/selectors/getProfileIsLoading';
import { getProfileReadonly } from '@/entities/Profile/model/selectors/getProfileReadonly';
import ProfileCard from '@/entities/Profile/ui/ProfileCard/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducerList,
} from '@/shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import Text from '@/shared/ui/Text/Text';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';
import cls from './EditableProfleCard.module.scss';
const reducers: ReducerList = {
  profileSchema: profileReducer,
};

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className = '', id } = props;
  const dispatch = useAppDispatch();
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const form = useSelector(getProfileForm);
  const validateErrors = useSelector(gerProfileErrors);

  useEffect(() => {
    if (id) {
      dispatch(
        fetchProfileData(id) as unknown as AsyncThunk<
          Profile,
          void,
          ThunkConfig<string>
        >
      );
    }
  }, [dispatch, id]);

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
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        gap='8'
        max
        className={clsx(cls.editableProfileCard, {}, [className])}
      >
        <EditableProfileCardHeader readonly={readonly}/>
        {validateErrors?.map((error) => (
          <Text key={error} title={error} theme='error' />
        ))}

        <ProfileCard
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
          readonly={readonly}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});

EditableProfileCard.displayName = 'EditableProfileCard';

export default EditableProfileCard;
