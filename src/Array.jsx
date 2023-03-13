import React, { Component } from 'react'

 class Array extends Component {
    state={
        react:["HTML","CSS","JS"]
    }
  render() {
    return (
      <div>{this.state.react.map((x)=>{
        return <li >{x}</li>
      })}</div>
    )
  }
}
export default Array;