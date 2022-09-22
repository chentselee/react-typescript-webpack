import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => 0);
  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
