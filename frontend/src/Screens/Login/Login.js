import React from 'react'

function Login() {
  return (
    <div className='main-container'>
      <div className="login-card">
        <h1>Create an Account or Sign in</h1>
        <form >
          <input type="text" name="name" placeholder="Full Name"/>
          <input type="email" name="email" placeholder="email"/>
          <input type="password" name="password" placeholder="Password"/>
          <button type="submit">Login</button>
          <p>or</p>
          <a href="">Sign in</a>
        </form>
      </div>

      
    </div>
  )
}

export default Login
