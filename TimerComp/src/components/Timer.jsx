import React, { useEffect, useRef, useState } from 'react'

const Timer = ({ time }) => {
    const [changeTime, setChangeTime] = useState(time);
    let interval = useRef(null)
     useEffect(()=>{
        console.log("rerendering")
        if(changeTime ===0){
            clearInterval(interval.current);
        }
     },[changeTime])

    const startCounter = () => {

        interval.current =setInterval(()=>{
            setChangeTime(pre=>pre-1);
        },1000);
       
    }
    return (
        <div>
            <p>{changeTime}</p>
            <button onClick={startCounter}>Start</button>
        </div>

    )
}

export default Timer;