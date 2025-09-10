import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Increase function
  const increment = () => {
    setCount(count + 1);
  };

  // Deacrease function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
