import React from 'react'
import STYLE from "./Nav1.module.css"


const Nav1 = () => {
   return (
      <div className={STYLE.aa}>
     

     <div>
    <img src="https://th.bing.com/th/id/R.d45479756a9d282b98cbb989c5465471?rik=6w1MsZS1pekLOQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f05%2fLogo-Of-BMW.png&ehk=80VGTDIukdAFsBp64eEKUyPmyOJR4dQWRTpi5qAWSDE%3d&risl=&pid=ImgRaw&r=0" alt="" />
    </div>
 
  



    <div className={STYLE.dd}>
    <ul >
     <li >
        <a  href="HOME">HOME</a>
     </li>
     <li>
        <a href="K">LOGIN</a>
     </li>
     <li>
        <a href="L">SIGNUP</a>
     </li>
     <li>
        <a href="N">ABOUT</a>
     </li>
    </ul>
         </div>
    
    
    </div>
   )
}

export default Nav1
