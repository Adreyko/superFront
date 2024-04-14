import Select from 'shared/ui/Select/Select';
import { Currency } from '../model/types/currency';
import { useCallback } from 'react';

interface CurrencyProps {
  className?: string;
  value?: Currency;
  onChange?: (currency: Currency) => void;
  readonly?: boolean;
}
const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = ({
  className,
  readonly,
  value,
  onChange,
}: CurrencyProps) => {
  const currencyHandle = useCallback(
    (val: string) => onChange?.(val as Currency),
    [onChange]
  );
  return (
    <Select
      className={className}
      readonly={readonly}
      label='choose currency'
      onChange={currencyHandle}
      value={value}
      options={options}
    />
  );
};

export default CurrencySelect;
