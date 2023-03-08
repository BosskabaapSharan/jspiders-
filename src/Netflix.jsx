import React from 'react'
import STYLE from "./Netflix.module.css"


const Netflix = () => {
   return (
      <div className={STYLE.aa}>

        
     

     <div>
    <img src="https://www.bing.com/th?id=OIP.DkCLrB5suQuau6Jl_jaiogHaB_&w=350&h=94&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
    </div>
 
  



    <div className={STYLE.dd}>
    <ul >

        <li>
            <select name="b" id="b">
            <option value="eng">ENGLISH</option>
            <option value="hi">HINDI</option>
            </select>
        </li>

        <li>
            <button type='submit' >SIGN IN</button>
        </li>
    
    </ul>
         </div>
    
    
    </div>
   )
}

export default Netflix
