import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const Counter = () => {
  const [couter, setCounter] = useState(0);
  const [isStop, setStop] = useState(true);
  const interval = useRef(null);
  useEffect(() => {
    const startCounter = () => {
      if (!isStop) {
        interval.current = setInterval(() => {
          setCounter(pre => pre + 1);
        }, 1000);
      } else {
        clearInterval(interval.current);
      }
    }
    startCounter();
  }, [isStop])

  const stopCounter = () => {
    setStop(true);
  }
  return (
    <>
      <h4>Counter is : {couter}</h4>
      <button onClick={()=>setStop(false)}>Start</button>
      <button onClick={stopCounter}>Stop</button>

    </>
  )
}

export default Counter