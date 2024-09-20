import React from 'react'
import './SignIn.css'

function SignIn() {
  return (
   
        <div className='main-container'>
        <div className="signin-card">
          <p  id="a">Sign in to Your Account</p>
            <input type="email" name="email" placeholder="Email" required/><br />
            <input type="password" name="password" placeholder="Password" required/><br />
            <button type="submit" className='signin-btn'>Sign In</button>
            <p>or</p>
            <p id="b">Don't have an Account?<a href="/login">Sign Up</a></p>
        
        </div>

        
      </div>
  

  
  )
}

export default SignIn
