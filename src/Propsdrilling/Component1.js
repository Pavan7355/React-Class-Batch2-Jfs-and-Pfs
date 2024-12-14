import React, { useState } from 'react'
import Component2 from './Component2'

function Component1() {
    const[name,setName]=useState("Virat")
    const[username,setUsername]=useState('')
  return (
    <div>
        
      <div style={{height:"500px",width:"800px",
        boxShadow:"0px 0px 10px black",textAlign:"center"
      }}>
        <h1>Component 1</h1>
        <h3>My name is {name}</h3>
        <label>Username</label>
        <input type='text' name='username' value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
     
        <Component2 fname={name} username={username}/>
        
      </div>
    </div>
  )
}

export default Component1
