import React from 'react'

const Details = (x) => {
  return (
    <div className='a'>
        <div className='b'>
            <h4>{x.d[0].studentName}</h4>
            <h4>{x.d[0].studentId}</h4>
            <h4>{x.d[0].yearofPass}</h4>
            <h4>{x.d[0].branch}</h4>
           
            
        </div>
        <div className='b'>
        <h4>{x.d[1].studentName}</h4>
            <h4>{x.d[1].studentId}</h4>
            <h4>{x.d[1].yearofPass}</h4>
            <h4>{x.d[1].branch}</h4>
        </div>
        
    </div>
  )
}

export default Details