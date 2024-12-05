import React from 'react'
import { useState } from 'react'

function Example1() {
               const[state,setState]=useState(100)
               let[name,setName]=useState("Raj")
               const[isplaced,setIsplaced]=useState(true)
const[data,setData]=useState({name:"viart",age:36})
const[empty,setEmpty]=useState("____")
  return (
    <div>
      <h1>{state}</h1>
      <h2>My name is {name}</h2>
{isplaced?<p>Yes</p>:<p>No</p>}
<h3>My name is {data.name}, i am {data.age} year old</h3>
<h4>the data is {empty}</h4>
    </div>
  )
}

export default Example1
