import React, { useState } from 'react';

/* FUNCTIONAL COMPONENT*/

export default function App() {
  let [counter, setCount] = useState(0);
  return (
    <div>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCount(counter + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(counter - 1);
        }}
      >
        {' '}
        Decrease{' '}
      </button>
    </div>
  );
}
