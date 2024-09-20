import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='main-container'>
      <div className="login-card">
        <p  className="a">Create an Account</p>
          <input type="text" name="name" placeholder="Full Name" required/> <br />
          <input type="email" name="email" placeholder="Email" required/><br />
          <input type="password" name="password" placeholder="Password" required/><br />
          <button type="submit" className='login-btn'>Sign Up</button>
          <p>or</p>
          <p className="b">Already have an Account?<a href="/signin">Sign In</a></p>
      
      </div>

      
    </div>
  )
}

export default Login
