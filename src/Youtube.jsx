import React, { useRef, useState } from 'react'
import IMG from "./gq0rz6.webp"

const Youtube = () => {
  let [img,setimg]=useState(IMG)
  let imgref=useRef()
  let [load,setload]=useState(true)

  let change=()=>{
    if(load==true)
    {
      setload(!true)
      imgref.current.style.borderRadius="25%"
      imgref.current.style.border="2px solid blue"
    }
    else{
      setload(!false)
      imgref.current.style.borderRadius="0"
      imgref.current.style.border="none"
    }
  }
   
  return (
    <div>
     <img src={img} alt="" ref={imgref} height="200px" width="200px"/>
     <button onClick={change}>{load?"on":"off"}</button>
    </div>
    
  )
}

export default Youtube