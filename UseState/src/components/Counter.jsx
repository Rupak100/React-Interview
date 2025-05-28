import { useState } from "react";

const Counter = () => {
    const [count, setCounter] = useState(0);
    const [arr,setArr]= useState([1,2,4,5,]); 
    // for immutability
    function update(){
        setArr((p)=>{
         return [...p,[9,8,7,6]]
        });
        console.log(arr);
        
    }
    return (
        <>
            <h1>
                {count}
            </h1>
            <p>{arr}</p>
            <button onClick={() => setCounter(count + 1)}>
                Increase
            </button>
            <button onClick={() => setCounter(count - 1)}>
                Decrease
            </button>
            <button onClick={update}>Update</button>
        </>
    )
}
export default Counter;
