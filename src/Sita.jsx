import React from 'react'

const Sita = (x) => {
    if(x.d.ca==true)
    {
  return (
    <>
    <button style={{color:"green"}}>AVAILABLE</button>
    <h1>{x.d.cd}</h1>
    <h1>{x.d.cn}</h1>
    </>
  )
}
else{
    return (
        <>
        <button style={{color:"red"}}>NOTAVAILABLE</button>
        <h1>{x.d.cd}</h1>
        <h1>{x.d.cn}</h1>
        </>
      )
}
}


export default Sita