import Select from '@/shared/ui/Select/Select';

import { useCallback } from 'react';
import { Country } from '../model/types/country';

interface CurrencyProps {
  className?: string;
  value?: Country;
  onChange?: (country: Country) => void;
  readonly?: boolean;
}
const options = [
  { value: Country.Australia, content: Country.Australia },
  { value: Country.England, content: Country.England },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.UnitedStates, content: Country.UnitedStates },
];
export const CountrySelect = ({
  className,
  readonly,
  value,
  onChange,
}: CurrencyProps) => {
  const currencyHandle = useCallback(
    (val: string) => onChange?.(val as Country),
    [onChange]
  );
  return (
    <Select
      className={className}
      readonly={readonly}
      label='choose country'
      onChange={currencyHandle}
      value={value}
      options={options}
    />
  );
};

export default CountrySelect;
