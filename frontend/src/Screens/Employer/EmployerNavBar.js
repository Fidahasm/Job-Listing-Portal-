import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './EmployerNavBar.css';

function EmployerNavBar({ children }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('jobs');

  const gotoJobs = () => {
    setActiveSection('jobs');
    navigate('/employer/employer-home');
  };

  const gotoCandidates = () => {
    setActiveSection('candidates');
    navigate('/employer/candidates');
  };

  return (
    <div className="div-main">
      <div className="nav-main">
        <div className="navbar">
          <div className={`nav-content ${activeSection === 'jobs' ? 'active' : ''}`} onClick={gotoJobs}>Jobs</div>
          <div className={`nav-content ${activeSection === 'candidates' ? 'active' : ''}`} onClick={gotoCandidates}>Candidates</div>
          <div className={`nav-content ${activeSection === 'username' ? 'active' : ''}`}><i className='bx bx-user-circle'></i>Username</div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default EmployerNavBar;
