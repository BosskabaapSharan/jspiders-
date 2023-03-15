import React, { Component } from 'react'
import "./application.css"

export default class Counter extends Component {
  constructor(){
    super()
    this.state={
        count:0
    }
  }  
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  reset=()=>{
    this.setState({count:0})
  }
  render() {
    return (
            <body>
                
          
      
      <div className='a'>
        <h2 id='z'>{this.state.count}</h2>
        <div className='b'>
        <button onClick={this.increment} id="c">+ increment</button>
        <button onClick={this.decrement} id="d">- decrement</button>
        <button onClick={this.reset} id="e">reset</button>
        </div>
      </div>
      </body>
      
    )
  }
}
