import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import { Router } from 'react-router-dom'
function Signup() {
  return (
    <div>
      <div className='Signup-heading'>
    <h1>Signup Page</h1>
</div>
    <div className="signup-container">
      <h2>Signup</h2>
      <form >
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
       name="username" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
        name="password"
            required 
          />
        </div>
        <button className="btn" type="submit">Signup</button>
      </form>
      <div style={{textAlign:"center",marginTop: "10px"}}>
    <Link to="/">Already have an account? Login here</Link>
  </div>
    </div>
    </div>
  )
}

export default Signup
