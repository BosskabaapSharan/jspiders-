import React, { useState } from 'react'


const Rahul = () => {
  
    let [un,setun]=useState("")
  let [pwd,setpwd]=useState("")
  let [phno,setphno]=useState("")

  
     
  return (
    <div>
      <h1>SIGN UP</h1>
         <form action="" onSubmit={change} >
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" onChange={(e)=>{
          setun(e.target.value)
        }}/>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id='password'onChange={(e)=>{
          setpwd(e.target.value)
        }} />
        <br />
        <label htmlFor="phoneno">phoneno</label><br />
        <input type="text" /><br />
        <button >Submit</button>
        
      </form>

    </div>
  )
}

export default Rahul