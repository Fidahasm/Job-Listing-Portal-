import { useNavigate } from 'react-router-dom'
import React from 'react'
import './EmployerDashboard.css'

function EmployerDashboard() {
  return (
   <div className="div-main">
    <div className="nav-main">
    <div className="navbar">
      <div className="nav-content active">Jobs</div>
      <div className="nav-content">Candidates</div>
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
    <tr>
  <td>Frontend Developer</td>
  <td>22</td>
  <td>September 10, 2024</td>
  <td>Open</td>
</tr>
<tr>
  <td>Backend Developer</td>
  <td>15</td>
  <td>August 25, 2024</td>
  <td>Closed</td>
</tr>
<tr>
  <td>Machine Learning Engineer</td>
  <td>8</td>
  <td>September 12, 2024</td>
  <td>Open</td>
</tr>
<tr>
  <td>System Administrator</td>
  <td>5</td>
  <td>September 3, 2024</td>
  <td>Interviewing</td>
</tr>
<tr>
  <td>QA Engineer</td>
  <td>20</td>
  <td>September 7, 2024</td>
  <td>Open</td>
</tr>
<tr>
  <td>Sales Engineer</td>
  <td>14</td>
  <td>August 29, 2024</td>
  <td>Closed</td>
</tr>

  </tbody>
        </table>
      </div>
      <div className="nav-content" id='post-job'>Post Job</div>
      <div className="search-icon"><i class='bx bx-search'></i></div>

    </div>
   </div>
  )
}

export default EmployerDashboard
