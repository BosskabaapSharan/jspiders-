import React, { Component } from 'react'

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default class Tata extends Component {
 change=()=>{
 toast.success("done baba")
 }
 


  render() {
    return (
        <>
        <ToastContainer/>
      <div>
        <button onClick={this.change}>click</button>
      </div>
      </>
    )
  }
}
