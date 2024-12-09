import React, { useState } from 'react'
import './example7.css'
function Example7() {
    const[username,setUsername]=useState('')
   const[password,setPassword]=useState('')
    const handleClick=(event)=>{
        event.preventDefault()
console.log("username is "+username)
console.log("Password is "+password)
    }
  return (
    <div>
      <div className='container'>
        <form className='formContainer'>
            <label>Username</label>
            <input type='text' name='username'
            placeholder='Enter user name'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}></input>
            <br/><br/>
            <label>Password</label>
            <input type='password' name='password'
            placeholder='Enter password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}></input>
            <br/><br/>
            <button onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Example7
