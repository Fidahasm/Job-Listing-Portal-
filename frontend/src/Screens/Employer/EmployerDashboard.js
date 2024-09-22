import React from 'react'
import './EmployerDashboard.css'

function EmployerDashboard() {
  return (
   <div className="div-main">
    <div className="nav-main">
    <div className="navbar">
      <div className="nav-content active">Jobs</div>
      <div className="nav-content">Candidates</div>
      {/* <div className="nav-content" id='post-job'>Post Job</div> */}
      <div className="nav-content"><i class='bx bx-user-circle'></i>Username</div>
    </div>
    </div>

    <div className="body-main">
      <div className="table">
        <table>
          <thead>
            <th>Job Title</th>
            <th>Candidates number</th>
            <th>Date Posted</th>
            <th>Job Status</th>
          </thead>
          <tbody>
    <tr>
      <td>Software Engineer</td>
      <td>25</td>
      <td>September 15, 2024</td>
      <td>Open</td>
    </tr>
    <tr>
      <td>Data Analyst</td>
      <td>18</td>
      <td>August 30, 2024</td>
      <td>Closed</td>
    </tr>
    <tr>
      <td>UI/UX Designer</td>
      <td>10</td>
      <td>September 5, 2024</td>
      <td>Open</td>
    </tr>
    <tr>
      <td>Product Manager</td>
      <td>12</td>
      <td>August 28, 2024</td>
      <td>Interviewing</td>
    </tr>
    <tr>
      <td>DevOps Engineer</td>
      <td>30</td>
      <td>September 1, 2024</td>
      <td>Open</td>
    </tr>
  </tbody>
        </table>
      </div>
    </div>
   </div>
  )
}

export default EmployerDashboard
