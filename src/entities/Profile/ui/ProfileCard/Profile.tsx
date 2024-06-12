import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './Profile.module.scss';
import Text from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import Input from '@/shared/ui/Input/Input';
import { Profile } from '@/entities/Profile/model/types/profile';
import Loader from '@/shared/ui/Loader/Loader';

import Avatar from '@/shared/ui/Avatar/Avatar';
import { Currency } from '@/entities/Currency/model/types/currency';
import { CurrencySelect } from '@/entities/Currency';
import { Country } from '@/entities/Country/model/types/country';
import CountrySelect from '@/entities/Country/ui/CountrySelect';

interface ProfileProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname: (value: string) => void;
  onChangeFirstname: (value: string) => void;
  onChangeCity?: (val: string) => void;
  onChangeAge?: (val: string) => void;
  onChangeUsername?: (val: string) => void;
  onChangeAvatar?: (val: string) => void;
  onChangeCurrency?: (val: Currency) => void;
  onChangeCountry?: (val: Country) => void;
}

const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileProps) => {
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={clsx(cls.profile, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(cls.profile, {}, [className, cls.error])}>
        <Text
          title={'Something when wrong in profile '}
          theme='error'
          text='Try to reload page'
          textAlign='center'
        />
      </div>
    );
  }
  return (
    <div className={clsx(cls.profile, {}, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.imageContainer}>
            <Avatar
              alt='avatar'
              src={data.avatar}
              size='100px'
              className={cls.image}
            />
          </div>
        )}
        <Input
          onChange={onChangeFirstname}
          readOnly={readonly}
          placeholder={t('yourName')}
          value={data?.first}
        />
        <Input
          readOnly={readonly}
          placeholder={t('yourSurname')}
          value={data?.lastname}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder={t('yourAge')}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('yourCity')}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('yourUsername')}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('yourAvatar')}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          readonly={readonly}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          readonly={readonly}
          value={data?.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
