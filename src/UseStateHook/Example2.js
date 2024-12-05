import React from 'react'
import { useState } from 'react'
function Example2() {
    const[state,setState]=useState("Welcome to Pentagonspace")
    const[isplaced,setIsplaced]=useState(true)
    const[data,setData]=useState({name:"viart",age:36})
  let handleClick=()=>{
    setState("thank you for visiting")
    setIsplaced(false)
    setData({name:"sachin",age:27})
    }
  return (
    <div>
      <h1>{state}</h1>
      {isplaced?<p>Yes</p>:<p>No</p>}
      <h3>My name is {data.name}, i am {data.age} year old</h3>
      <button onClick={handleClick}>Change Content</button>
    </div>
  )
}

export default Example2
