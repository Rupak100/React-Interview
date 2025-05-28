import { useEffect, useState } from "react";

const Data =()=>{
      const [data,setData] =useState([]);
    //   Runs at every render will acts as a render function 
      useEffect(()=>{
        function updateData(){
            setData([1,2,3,4]);
        }
        console.log("without dependency it will run at every render");
        // updateData();
      });

    //   same as component did mount
      useEffect(()=>{
        function updateData(){
            setData([1,2,3,4]);
        }
        console.log("with empty  dependency it will not run at every render");
        // updateData();
      },[]);

      useEffect(()=>{
        function updateData(){
            setData([1,2,3,4]);
        }
        console.log("with empty  dependency it will not run at every render");
        // updateData();
      },[data]);

      //cleanup function

      useEffect(()=>{
        return ()=>{
            console.log("this will run at component unmounting and in the next effect cleanup function");
            
        }
      },[data])

      
    return(
        <>
         <p>{data}</p>
         <button onClick={()=>setData([3,4,5])}>Change</button>
        </>
    )
}

export default Data;