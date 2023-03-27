import React, { useState } from 'react'
import Rahul from './Rahul';

const Project = (p) => {
    let [user , setUser] = useState("")
  let [pass, setPass] = useState("")

  let handleSubmit = (e)=>{
    e.preventDefault()
    console.log({user , pass});
    let key1=user;
    let key2=pass;
    localStorage.setItem(key1,user,key2,pass)
    
    }
  return (
    <div>
         <form action="" >
    <label htmlFor="username">Username</label>
    <br />
    <input type="text" id="username" onChange={(e)=>{
      setUser(e.target.value)
    }}/>
    <br />
    <label htmlFor="password">Password</label>
    <br />
    <input type="password" id='password'onChange={(e)=>{
      setPass(e.target.value)
    }} />
    <br />
    <button onClick={handleSubmit}>Submit</button>
  </form>
  </div>
    
  )
}

export default Project
