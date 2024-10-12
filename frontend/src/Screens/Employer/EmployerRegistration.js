import React from 'react'
import './EmployerRegistration.css'

function EmployerRegistration() {
  return (
    <div className='maindiv'>
      <div className="subdiv">
        <div className="head">
          <div className="head-left">
            <div className='left'>
              <h1>
                Create an employer account

              </h1>
            </div>

          </div>
          <div className="head-right">

          </div>
        </div>
          <div className="form">
            <h1>You haven't posted a job before, so you'll need to create an employer account.</h1>

            <div className='content'>
              <label htmlFor="">Your company's name</label>
              <input type="text"  required/>
            </div>
            <div className='content'>
              <label htmlFor="">Your company's number of employees</label>
              <select name="no of employee" id="" required>
                <option value="select an oprion" >Select an option</option>
                <option value="1 to 49">1 to 49</option>
                <option value="50 to 149">50 to 149</option>
                <option value="150 to 249">150 to 249</option>
                <option value="250 to 499">250 to 499</option>
                <option value="500 to 799">500 to 799</option>
                <option value="750 to 999">750 to 999</option>
                <option value="1000+">1000+</option>

              </select>
            </div>

            <div className='content'>
              <label htmlFor="">Your first and last name</label>
              <input type="text" required/>
            </div>
            <div className='content'>
              <label htmlFor="">Your phone number </label>
              <input type="text" required/>
            </div>
            <div className="button">
            <div className="continue">
              Submit
              <i className='bx bx-right-arrow-alt' style={{fontSize:"20px"}}></i>
            </div>
            </div>
            

          </div>

      </div>

    </div>
  )
}

export default EmployerRegistration
