import React, { useState } from 'react'
import './example8.css'
function Example8() {
    const[fromdata,setFromdata]=useState({
        name:'',
        phone:'',
        email:'',password:'',confpassword:''
    })
    const[passworderror,setPasswordError]=useState(false)
    const[formfields,setFormFileds]=useState(false)
    const[submit,setSubmit]=useState(false)
    const handleClick=(event)=>{
const name=event.target.name
   const value= event.target.value
   setFromdata({...fromdata,[name]:value})
  }
  const submitform=(e)=>{
e.preventDefault()
if(fromdata.password !== fromdata.confpassword){
    setPasswordError(true)
    }
     else if(fromdata.name ===''|| fromdata.email === ''||
        fromdata.phone === ''|| fromdata.password === ''||
        fromdata.confpassword === '')
     {
       setFormFileds(true) 
     } 
     else{
        setSubmit(true)
        console.log("Name is "+fromdata.name)
        console.log("Phone Number is "+fromdata.phone)
        console.log("Email is "+fromdata.email)
        console.log("Passwor is "+fromdata.password)
        console.log("Confirm Password is "+fromdata.confpassword)
     }
  }
  return (
    <div className='container'>
      <h2>Welcome to Employee Registration From</h2>
      <div className='form-control'>
      <form onSubmit={submitform}>
        <div>
        <label>Name</label>
        <input type='text' name='name' placeholder='enter the name'
        value={fromdata.name}
        onChange={handleClick}></input>
        </div>
        <div>
        <label>Phone</label>
        <input type='number' name='phone' placeholder='enter the Phone number
        ' onChange={handleClick}
        value={fromdata.phone}></input>
        </div>
        <div>
        <label>Email</label>
        <input type='email' name='email' placeholder='enter the email Id
        ' onChange={handleClick}
        value={fromdata.email}></input>
        </div>
        <div>
        <label>Password</label>
        <input type='password' name='password' placeholder='enter password
        ' onChange={handleClick}
        value={fromdata.password}></input>
        </div>
        <div>
        <label>Confirm Password</label>
        <input type='password' name='confpassword' placeholder='enter confirm password
        ' onChange={handleClick}
        value={fromdata.confpassword}></input>
        </div>
        <input type='submit' id='btn'></input>
      </form>
{passworderror&&<p style={{color:"red",fontSize:"larger"}}>
    "Password doen't match"</p>}
      {formfields && <p style={{color:"red",fontSize:"larger"}}>
        "Please Fill all the fields"
      </p>}
      {submit?<p style={{color:"green",fontSize:"larger"}}
      >"From submitted Successfully"</p>:<p></p>}
      </div>
    </div>
  )
}

export default Example8
