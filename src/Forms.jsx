import React, { Component } from 'react'

export default class Forms extends Component {
  render() {
    return (
      <div>
        <form action="">
            <label htmlFor="un">un</label> <br />
            <input type="text" id='un' /> <br />
            <label htmlFor="pwd">pwd</label> <br />
            <input type="text" id='pwd' /> <br />
            <button onClick={(e)=>{
                e.preventDefault()
                let unm=document.getElementById("un").value
                let pwds=document.getElementById("pwd").value
                console.log(unm,pwds);
            }}>submit</button>
        </form>
      </div>
    )
  }
}
