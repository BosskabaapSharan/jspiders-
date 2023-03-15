import React from 'react'

const Todat = (x) => {
    
  return (
    <div>
        <table border="2px">
            <tr>
                <th>name</th>
                <th>age</th>
                <th>degree</th>
                <th>branch</th>
                <th>pic</th>
            </tr>
            {x.data.map((x)=>{
                return <tr>
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>{x.degree}</td>
                <td>{x.branch}</td>
                <td><img src={x.pic} alt=""  height="100px" width="100px"/></td>

                </tr>
            })}
        </table>
    </div>
  )
}

export default Todat