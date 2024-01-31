import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"

interface CounterProps {
  className?: string
}

export const Counter = ({ className }: CounterProps) => {
  const counterValue = useSelector((value: StateSchema) => value.counter.value)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div >
      <h1>value = {counterValue}</h1>
      <button onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>
        decrement
      </button>
    </div>
  )
}

export default Counter;
