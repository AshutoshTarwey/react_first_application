import React, { useState, useEffect } from 'react';

/* FUNCTIONAL COMPONENT*/

export default function UseEffectExample() {
  const [counter, setCounter] = useState(10);
  const [sqCounter, setSqCounter] = useState(0);

  function Increase() {
    setCounter(counter + 1);
  }
  function Decrease() {
    setCounter(counter - 1);
  }

  useEffect(useEffectSideEffect, [counter]);

  /* when will useEffect will get called in your app component? 
    Answer - when the component will render its first time and 
             on every update of its dependancy.

    Note - API call like created we have done in vue
  */

  function useEffectSideEffect() {
    setSqCounter(counter * counter);
    console.log(counter);
  }

  return (
    <div>
      <h2>Use effect example</h2>
      <h2>COUNTER : {counter}</h2>
      <h2>COUNTER SQ : {sqCounter}</h2>
      <button onClick={Increase}>Increment</button>

      <button onClick={Decrease}>Decrement</button>
    </div>
  );
}
