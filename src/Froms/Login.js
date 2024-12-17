import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
      <div className='Login-heading'>
        <h1>Login Page</h1>
    </div>
    <div className="login-container">
      <h2>Login</h2>
      <form >
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
            type="password" name="password"
            required 
          />
        </div>
        <div style={{textAlign:"center",marginTop: "10px",padding:"10px"}}>
    <Link to="/password">Forgot Password?</Link>
  </div>
        <button className="btn" type="submit">Login</button>
      </form><div style={{textAlign:"center",marginTop: "10px"}}>
    <Link to="/signup">Don't have an account? Signup here</Link>
  </div>
    </div>
    </div>
  )
}

export default Login
