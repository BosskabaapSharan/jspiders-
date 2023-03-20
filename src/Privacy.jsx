import React from 'react'
import eye from "./th.jpg"
import { useState } from 'react';
const Privacy = () => {

  let [password , setPassword] = useState(true)

  let showPassword = ()=>{
    if(password == true)
    {
        setPassword(!true)
    }
    else
    {
        setPassword(!false)
    }
  }
  return (
    <div>

      <input type={password? "text" : "password"} name="" id="" />
      <img src={eye} alt="" height="20px" width="20px" onClick={showPassword} />
    </div>
  )
}

export default Privacy