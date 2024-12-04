import React from 'react'
import './example.css'
function Example2() {
    const data=[{
        id:1,name:"Raj",age:25,gender:"male",skill:"React Js"
    },{
         id:2,name:"Riya",age:23,gender:"female",skill:"Angular Js"
    },{
         id:3,name:"Viart",age:21,gender:"male",skill:"Vue Js"
    }]
  return (
    <div>
      <table border={"1"}>
<tr>
    <th>Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Skills</th>
</tr>
{data.map((val,key)=>{
    return(
        <>
        <tr key={key}>
<td>{val.id}</td>
<td>{val.name}</td>
<td>{val.age}</td>
<td>{val.gender}</td>
<td>{val.skill}</td>
        </tr>
        </>
    )
})}
      </table>
    </div>
  )
}

export default Example2
