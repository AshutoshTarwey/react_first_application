import React from 'react';
import { useState, useEffect } from 'react';
import './UseEffectAPICallStyle.css';

export default function UseEffectAPICall() {
  const [url, setUrl] = useState('');
  const [next, setNext] = useState(1);
  const apiurl = 'https://dog.ceo/api/breeds/image/random/1';

  useEffect(useEffectMethodCall, [next]);

  function useEffectMethodCall() {
    apiCall();
  }

  async function apiCall() {
    await fetch(apiurl)
      .then((p) => {
        let response = p.json();
        debugger;
        setUrl(response.message);
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  }

  function nextMethod() {
    setNext(next + 1);
  }

  return (
    <div>
      Reactive Rain at Bangalore with UseEffect example.
      <button onClick={nextMethod}>Next</button>
      <div className="doggy"></div>
    </div>
  );
}
