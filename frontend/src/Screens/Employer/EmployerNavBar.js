import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './EmployerNavBar.css';

function EmployerNavBar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('jobs');
  const [showDropdown, setShowDropdown] = useState(false);
  const userEmail = 'user@example.com';

  // Set the initial active section based on the current route
  useEffect(() => {
    if (location.pathname.includes('employer-home')) {
      setActiveSection('jobs');
    } else if (location.pathname.includes('candidates')) {
      setActiveSection('candidates');
    }
  }, [location]);

  const gotoJobs = () => {
    setActiveSection('jobs');
    navigate('/employer/employer-home');
    setShowDropdown(false); // Close the dropdown when navigating
  };

  const gotoCandidates = () => {
    setActiveSection('candidates');
    navigate('/employer/candidates');
    setShowDropdown(false); // Close the dropdown when navigating
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    // Handle logout functionality here
    console.log('Logged out');
    setShowDropdown(false);
    navigate('/'); // Navigate to the home page after logout
  };

  return (
    <div className="div-main">
      <div className="nav-main">
        <div className="navbar">
          <div
            className={`nav-content ${activeSection === 'jobs' ? 'active' : ''}`}
            onClick={gotoJobs}
          >
            Jobs
          </div>
          <div
            className={`nav-content ${activeSection === 'candidates' ? 'active' : ''}`}
            onClick={gotoCandidates}
          >
            Candidates
          </div>
          <div
            className={`nav-content ${showDropdown ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            <i className='bx bx-user-circle'></i> Username
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <button className="close-dropdown" onClick={() => setShowDropdown(false)}>
              &times; {/* Close icon, you can replace it with an SVG or Font Awesome icon */}
            </button>
          </div>
          <p className="user-email">{userEmail}</p>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      )}
      <div className="content-area">
        {children}
      </div>
    </div>
  );
}

export default EmployerNavBar;
