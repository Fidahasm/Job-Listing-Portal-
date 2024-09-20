import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';


function SignIn() {
  return (
   
        <div className='main-container'>
        <div className="signin-card">
          <p  id="a">Sign in to Your Account</p>
            <input type="email" name="email" placeholder="Email" required/><br />
            <input type="password" name="password" placeholder="Password" required/><br />
            <button type="submit" className='signin-btn'>Sign In</button>
            <p>or</p>
            <p id="b">Don't have an Account?<Link to="/login">Sign Up</Link></p>
        
        </div>

        
      </div>
  

  
  )
}

export default SignIn
