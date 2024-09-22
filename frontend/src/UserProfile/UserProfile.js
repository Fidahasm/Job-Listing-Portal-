import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);
  // State to track multiple education forms
  const [educationForms, setEducationForms] = useState([{ school: '', degree: '', fieldOfStudy: '' }]);

  // Function to handle adding a new education form
  const addEducationForm = () => {
    setEducationForms([...educationForms, { school: '', degree: '', fieldOfStudy: '' }]);
  };

  // Function to handle deleting an education form
  const deleteEducationForm = (index) => {
    const updatedForms = educationForms.filter((_, i) => i !== index);
    setEducationForms(updatedForms);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && skill.trim()) {
      event.preventDefault();
      if (!skills.includes(skill)) {
        setSkills([...skills, skill]);
      }
      setSkill('');
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='maindiv-user'>
      <div className="subdiv-user">
        <div className="head-user">
          <div className="head-left-user">
            <div className='left-user'>
              <h1>Complete Your Profile</h1>
            </div>
          </div>
        </div>
        <div className="form">
          <div className='content'>
            <label htmlFor="">Full Name</label>
            <input type="text" required />
          </div>
          <div className='content'>
            <label htmlFor="">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className='content'>
            <label htmlFor="">Phone Number</label>
            <input type="text" required />
          </div>
          <div className='content'>
            <label htmlFor="">Country/Region</label>
            <input type="text" required />
          </div>
          <div className='content'>
            <label htmlFor="">City</label>
            <input type="text" required />
          </div>

          {/* Add Education heading only once */}
          {educationForms.length > 0 && (
            <div className='content' >
              <h3 style={{marginBottom:'0px'}}>Add Education</h3>
            </div>
          )}

          {/* Rendering multiple education forms */}
          {educationForms.map((form, index) => (
            <div key={index} className="content">
              <div className='edc'>
                <label htmlFor="">School/College</label>
                <input type="text" required />
              </div>
              <div className='edc'>
                <label htmlFor="">Degree</label>
                <input type="text" required />
              </div>
              <div className='edc' style={{ paddingBottom: '0px' }}>
                <label htmlFor="">Field of Study</label>
                <input type="text" required />
              </div>

              {educationForms.length > 1 && (
                <div className="delete-btn" onClick={() => deleteEducationForm(index)}>
                  Delete
                </div>
              )}
            </div>
          ))}

          <div className="content">
            <div className="add-btn" onClick={addEducationForm}>
              Add
              <i className='bx bx-plus' style={{ fontSize: "20px" }}></i>
            </div>
          </div>

          <div className='content'>
            <h3 style={{marginBottom:'32px'}}>Add Skills</h3>
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a skill and press Enter"
              className="skills-input"
              required
            />
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                  <span className="remove-skill" onClick={() => handleRemoveSkill(index)}>
                    &#x2715;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="button">
            <div className="continue">Save</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
