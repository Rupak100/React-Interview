import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterAction';

const Counter = () => {

    const dispatch = useDispatch();
    const couter =useSelector((state)=>state.counter.count);
  return (
    <div>
    <h4>Count is : {couter}</h4>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter