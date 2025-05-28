import { useRef } from "react"

export default function UseRef (){
    const data =useRef(null);
    const data2 =useRef(0);
    console.log("rerender occurs");
    
    function handleSubmit(e){
      e.preventDefault();
      data2.current++;
      console.log(data2.current.value);
      
      alert(data.current.value);
    }
    return(
        <>
          <form onSubmit={handleSubmit}>
              <input placeholder="enter something" ref={data}/>
              <button type="submit">Submit</button>
          </form>
        </>
    )
}