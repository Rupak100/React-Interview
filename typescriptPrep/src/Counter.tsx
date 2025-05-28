import type React from "react";
import { useState } from "react";

const Counter:React.FC=()=>{
    const[count,setCount]=useState<number>(0);
    const increase =()=>{
        setCount(pre=>pre+1);
    }
    const decrease =()=>{
        setCount(pre=>pre-1);
    }
   return(
    <>
    <h4>Counter is: {count}</h4>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    </>
   )
}
export default Counter;