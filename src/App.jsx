import React, { useState, useEffect } from 'react';
import UseEffectExample from './UseEffectExample';
import UseEffectAPICall from './UseEffectAPICall';

/* FUNCTIONAL COMPONENT*/

export default function App() {
  let [counter, anup] = useState(10);

  function Increase() {
    anup(counter + 1);
  }
  function Decrease() {
    anup(counter - 1);
  }

  useEffect(useEffectSideEffect, [counter]);

  function useEffectSideEffect() {
    debugger;
    console.log(counter);
  }

  return (
    <div>
      <h2>Use state </h2>
      <h2>{counter}</h2>
      <button onClick={Increase}>Increment</button>
      <button onClick={Decrease}>Decrement</button>
      <hr />

      <UseEffectExample></UseEffectExample>

      <hr />
      <UseEffectAPICall></UseEffectAPICall>
    </div>
  );
}
