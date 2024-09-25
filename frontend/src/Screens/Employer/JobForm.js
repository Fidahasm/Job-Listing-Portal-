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
            <textarea placeholder='Introduce your company to people in few lines' required />
          </div>
          {/* <br /> */}
          <hr style={{ width: '100%' , height:'0.5px', marginTop:'29px'}} />

          <div className='job-content'>
            <label htmlFor="">Job title</label>
            <input type='text' required />
          </div>
          <div className='job-content'>
            <label htmlFor="">Job description</label>
            <textarea placeholder='Describe the job details and skills required in few lines' required />
          </div>
          {/* <br /> */}

          {/* <hr style={{ width: '100%' , height:'0.5px'}} /> */}
        

          <div className='job-content'>
            <label htmlFor="">Which option best describes this job's location?</label>
            <select name="On-site or Remote" id="" required>
              <option value="select an oprion" >Select an option</option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className='job-content'>
            <label htmlFor="">City</label>
            <input type="text" required />
          </div>
          <div className='job-area'>
            <div className='sub'>
              <label htmlFor="">Area </label>
              <input type="text" required />
            </div>
            <div className='sub'>
              <label htmlFor="">Pincode </label>
              <input type="text" required />
            </div>

          </div>
          <div className='job-content'>
            <label htmlFor="">Street address</label>
            <input type="text" required />
          </div>
          <div className='job-content'>
            <label htmlFor="">Job type</label>
            <select name="type of job" id="" required>
              <option value="select an oprion" >Select an option</option>
              <option value="Full-time">Full-time</option>
              <option value="Freelance">Freelance</option>
              <option value="Fresher">Fresher</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Permanent">Permanent</option>
            </select>
          </div>
          <div className='job-content'>
            <label htmlFor="">Number of poeple you wish to hire for this job</label>
            <input type='number' required />
          </div>
          <div className='job-content'>
            <label htmlFor="">Salary </label>
            <div className='job-area'>
              <div className='rate'>
                <label htmlFor="">Minimum </label>
                <input type="number" required />
              </div>
              <div className='rate'>
                <label htmlFor="">Maximum </label>
                <input type="number" required />
                

              </div>
              <div className="rate">
                <label htmlFor="">Rate</label>

                  <select name="salary" id="">
                    <option value="select an oprion" >Select an option</option>
                    <option value="per month">Per month</option>
                    <option value="per annum">Per annum</option>

                  </select>
                </div>

            </div>

          </div>


          <div className="button">
            <div className="job-continue">
              Submit
              <i className='bx bx-right-arrow-alt' style={{ fontSize: "20px" }}></i>
            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default JobForm
