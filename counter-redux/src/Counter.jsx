import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Decrement, Increment ,Reset } from './redux/counterSlice';
const Counter = () => {
    const [val,setValue] = useState("");
     const dispatch  = useDispatch();
     const count = useSelector((state)=>state.counter.count);
    const increaseCounter = () =>{
       dispatch(Increment());
    }
    const decreaseCounter = ()=>{
     dispatch(Decrement());
    }
    const Resset = () =>{
        dispatch(Reset());
    }
  return (
    <div>
     <h4>Count {count}</h4>
     <input placeholder='Enter' value={val}  onChange={(e) => setValue(e.target.value)}/>
      <p>{`You typed: ${val}`}</p>
     <button onClick={increaseCounter}>Increase</button>
     <button onClick={decreaseCounter}>Decrease</button>
     <button onClick={Resset}>Reset</button>
    </div>
  )
}

export default Counter;