
import React from "react"
class Home extends React.Component{
    constructor(props){
       super(props);
       this.state={
        count:0,
        age:100
       }
    }
    increment(){
        this.setState({count:this.state.value+1})
    }
   render(){
    return(
        <>
         <p>{this.state.count}</p>
         <p>{this.state.age}</p>
         <button onClick={()=>this.increment()}>increment</button>
        </>
    )
   }
}