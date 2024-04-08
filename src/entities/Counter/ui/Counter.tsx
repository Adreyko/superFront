import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };
  console.log(value);
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
