import { useMemo, useState } from "react";

function User() {
    let [count,setCount] = useState(0);
    function heavecomputation(){
        let sum =0;
        console.log("recomputation of the function on every render");
        
        for(let i =0;i<100000;i++){
         sum+=i;
        }
        return sum;
    }
    let result =useMemo(()=>heavecomputation(),[]);
      return (
     <>
       <p>
        {result}
       </p>
       <p>{count}</p>
       <button onClick={()=>{setCount(count+1)}}>Increase</button>
     </>
  )
}

export default User;