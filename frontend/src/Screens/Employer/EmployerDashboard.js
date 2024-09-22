import React from 'react'
import './EmployerDashboard.css'

function EmployerDashboard() {
  return (
   <div className="div-main">
    <div className="nav-main">
    <div className="navbar">
      <div className="nav-content active">Jobs</div>
      <div className="nav-content">Candidates</div>
      <div className="nav-content" id='post-job'>Post Job</div>
      <div className="nav-content"><i class='bx bx-user-circle'></i>Username</div>
    </div>
    </div>
   </div>
  )
}

export default EmployerDashboard
