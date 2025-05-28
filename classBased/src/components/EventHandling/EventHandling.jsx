import React, { Component } from 'react'

export default class EventHandling extends Component {
    constructor(props){
        super(props);
        this.setState={
            count:0
        }
       this.increment3=this.increment3.bind(this);
    }
    increment1(){
        this.setState({count:this.state.count+1});
    }
    increment2 =()=>{
        this.setState({count:this.state.count+2})
    }
    increment3(){
        this.setState({count:this.state.count+3})
    }
    increment4(){
        this.setState({count:this.state.count+4})
    }
  render() {
    return (
      <div>
        <h4>event handler demo</h4>
        <h4>count is {this.state.count}</h4>
        <button onClick={()=>this.increment1()}>Increment1</button>
        <button onClick={()=>this.increment2()}>Increment2</button>
        <button onClick={()=>this.increment3}>increment3</button>
        <button >increment4</button>
      </div>
    )
  }
}
