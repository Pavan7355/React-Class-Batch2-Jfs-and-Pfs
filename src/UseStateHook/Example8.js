import React, { useState } from 'react'
import './example8.css'
function Example8() {
    const[fromdata,setFromdata]=useState({
        name:'',
        phone:'',
        email:'',password:'',confpassword:''
    })
    const handleClick=(e)=>{
        e.preventDefault()
const name=e.target.name
   const value= e.target.value
   setFromdata({...fromdata,[name]:[value]})
    }
  return (
    <div className='container'>
      <h2>Welcome to Employee Registration From</h2>
      <div className='form-control'>
      <form onSubmit={handleClick}>
        <div>
        <label>Name</label>
        <input type='text' name='name' placeholder='enter the name'
        value={fromdata.name}
        onChange={handleClick}></input>
        </div>
        <div>
        <label>Phone</label>
        <input type='number' name='phone' placeholder='enter the Phone number
        '
        value={fromdata.phone}></input>
        </div>
        <div>
        <label>Email</label>
        <input type='email' name='email' placeholder='enter the email Id
        '
        value={fromdata.email}></input>
        </div>
        <div>
        <label>Password</label>
        <input type='password' name='password' placeholder='enter password
        '
        value={fromdata.password}></input>
        </div>
        <div>
        <label>Confirm Password</label>
        <input type='password' name='confpassword' placeholder='enter confirm password
        '
        value={fromdata.confpassword}></input>
        </div>
        <input type='submit' id='btn'></input>
      </form>

      </div>
    </div>
  )
}

export default Example8
