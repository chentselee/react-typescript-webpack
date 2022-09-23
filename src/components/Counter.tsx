import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(() => 0);
  return (
    <div className={classes.container}>
      <div className={classes.count}>count: {count}</div>
      <div className={classes.buttons}>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
