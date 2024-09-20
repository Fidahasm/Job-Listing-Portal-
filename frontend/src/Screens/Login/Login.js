import React from 'react'
import { Link } from 'react-router-dom';

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
          <p className="b">Already have an Account? <Link to="/signin">Sign In</Link></p>
      
      </div>

      
    </div>
  )
}

export default Login
