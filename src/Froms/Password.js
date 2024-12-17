import React from 'react'
import './Password.css'
function Password() {
  return (
    <div>
      <div className='Password-heading'>
    <h1>Password Page</h1>
</div>
      <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form>
        
      <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
       name="name" 
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
           <div className="form-group">
          <label>Confirm Password</label>
          <input 
            type="text" 
       name="confpassword" 
            required 
          />
        </div>
        <button className="btn" type="submit">Submit</button>
        <button className="btn" type="submit"
        style={{marginTop:"8px"}}>Reset</button>
      </form>
    </div>
    </div>
  )
}

export default Password
