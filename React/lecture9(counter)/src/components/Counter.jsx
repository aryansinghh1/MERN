import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function buggyCounter() {
    setCount(count + 1);
    setCount(count + 1);
  }
  function fixedCounter() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={buggyCounter}>buggy +2</button>
      <button onClick={fixedCounter}>fixed +2</button>
    </div>
  );
}
