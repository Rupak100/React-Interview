import { useCallback, useState } from "react";
import Button from "./Button";

const Usecallback =()=>{
    const [count,setCount] =useState(0);
    let increase =useCallback(()=>{
        setCount(count=>count+1);
    },[]);
    let decrease =useCallback(()=>{
        setCount(count=>count-1);
    },[]);
    return(
        <>
            <p>{count}</p>
            <Button onClick={increase}>Increase</Button>
            <Button onClick={decrease}>Decrease</Button>
        </>
    )
}

export default Usecallback;