import { useState } from "react";
import classes from './Counter.module.scss'
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={classes.count}>{count}</h1>
      <button className={classes.btn} onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => (prev == 0 ? 0 : prev - 1))}>
        -
      </button>
    </div>
  );
}

export default Counter;
