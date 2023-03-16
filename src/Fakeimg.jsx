import React, { useState } from 'react'
import { faker } from '@faker-js/faker';

const Fakeimg = () => {
  let[img,setImg]  =useState(faker.image.avatar())
  let change=()=>{
    setImg(faker.image.avatar())
  }
  return (
    <div>
  <img src={img} alt="" />
  <button onClick={change}>change</button>
    </div>
  )
}

export default Fakeimg;