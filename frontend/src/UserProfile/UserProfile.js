import React from 'react'
import './UserProfile.css'

function UserProfile() {
  return (
   <div className="container-main">
    <div className="head-user">
      <h1>Complete Your Profile</h1>
    </div>
    <div className="form-main">
      <label >Full Name</label>
      <input type="text" name="name" placeholder="Enter your full name"/>
      <label >Email</label>
      <input type="email" name="email" placeholder="Enter your email"/>
      
    </div>

    
   </div> 
   
  )
}

export default UserProfile
