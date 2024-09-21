import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
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

  return (
    <div className='maindiv'>
      <div className="subdiv">
        <div className="head">
          <div className="head-left">
            <div className='left'>
              <h1>Complete Your Profile</h1>
            </div>
          </div>
          <div className="head-right"></div>
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

          {/* Rendering multiple education forms */}
          
          {educationForms.map((form, index) => (
            <div key={index} className="content">
              <h3>Add Education {index + 1}</h3>
              
              <div className='edc' >
                <label htmlFor="">School/College</label>
                <input type="text"  required />
              </div>
              <div className='edc'>
                <label htmlFor="">Degree</label>
                <input type="text"  required />
              </div>
              <div className='edc'>
                <label htmlFor="">Field of Study</label>
                <input type="text"  required />
              </div>

              {/* Delete button */}
              {educationForms.length > 1 && (
                <div className="delete-btn" onClick={() => deleteEducationForm(index)}>
                  Delete
                  {/* <i className='bx bx-minus' style={{ fontSize: "20px", marginLeft: "5px" }}></i> */}
                </div>
              )}
            </div>
          ))}

          {/* Add button */}
          <div className="content">
            <div className="add-btn" onClick={addEducationForm}>
              Add
              <i className='bx bx-plus' style={{ fontSize: "20px" }}></i>
            </div>
          </div>

          <div className="content">
            <h3>Add Skills</h3>
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
