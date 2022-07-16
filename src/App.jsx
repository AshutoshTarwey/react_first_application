import React, { useState } from 'react';

/* FUNCTIONAL COMPONENT*/

export default function App() {
  let [counter, setCount] = useState(0);

  function Increase() {
    setCount(counter + 1);
  }
  function Decrease() {
    setCount(counter - 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={Increase}>Increment</button>

      <button onClick={Decrease}>Decrement</button>
    </div>
  );
}
