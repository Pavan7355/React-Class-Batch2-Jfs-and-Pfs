import React, { useState } from 'react'

function Example4() {
    const[data,setData]=useState({name:'viart',age:36,city:'bangalore'})

  let handleClick= ()=>{
        setData({...data,name:"sachin"})
    }
  return (
    <div>
      <h1>My name is {data.name}</h1>
      <h3>I am from {data.city} </h3>
      <h4>I am {data.age} years old </h4>
      <button onClick={handleClick}>Change Data</button>
    </div>
  )
}

export default Example4
