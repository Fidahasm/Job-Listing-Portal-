import React from 'react'
import './Jobform.css'

function JobForm() {
  return (
    <div className='job-maindiv'>
      <div className="job-subdiv">
        <div className="job-head">
          <div className="job-head-left">
            <div className='job-left'>
              <h1>
                Add job basics

              </h1>
            </div>

          </div>
          <div className="job-head-right">

          </div>
        </div>
          <div className="job-form">

            <div className='job-content'>
              <label htmlFor="">Company's industry</label>
              <select name="no of employee" id="" required>
                <option value="select an oprion" >Select an option</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Accounting">Accounting</option>
                <option value="Education">Education</option>
                <option value="Health care">Health care</option>
                <option value="Financial">Financial</option>
                <option value="Software">Software</option>
                <option value="Telecommunication">Telecommunication</option>

              </select>
            </div>

            <div className='job-content'>
              <label htmlFor="">Company description</label>
              <textarea  required/>
            </div>
           
            <hr style={{  width:'100%'}}/>
            <h1>Job posting location.</h1>

            <div className='job-content'>
              <label htmlFor="">Which option best describes this job's location?</label>
              <select name="type of job" id="" required>
                <option value="select an oprion" >Select an option</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div className='job-content'>
              <label htmlFor="">City</label>
              <input type="text" required/>
            </div>
            <div className='job-content'>
              <label htmlFor="">Your phone number </label>
              <input type="text" required/>
            </div>
            <div className="button">
            <div className="job-continue">
              Continue
              <i className='bx bx-right-arrow-alt' style={{fontSize:"20px"}}></i>
            </div>
            </div>
            

          </div>

      </div>

    </div>
  )
}

export default JobForm
