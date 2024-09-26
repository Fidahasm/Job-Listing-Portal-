import React,{useState} from 'react'
import './ApplyJob.css'

function ApplyJob() {
    const [skill,setSkill] = useState('')
    const [skills,setSkills] = useState([]);
    // const[educationForms,setEducationForms] = useState([{school:'',degree:'',fieldOfStudy}]);
const handleKeyDown = (event) =>{
    if(event.key === 'Enter' && skill.trim()){
        event.preventDefault();
        if(!skills.includes(skill)){
            setSkills([...skills,skill]);
        }
        setSkill('')
    }
};
const handleRemoveSkill = (indexToRemove) =>{
    setSkills(skills.filter((_, index)=>index !==indexToRemove));
};

  return (
   <div className='maindiv-user'>
      <div className="subdiv-user">
        <div className="head-user">
          <div className="head-left-user">
            <div className='left-user'>
              <h1>Front End Developer <br /> <span style={{color:'#425df5'}}>Google</span></h1>
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
          
            <div className='content' >
              <h3 style={{marginBottom:'0px'}}>Highest Education</h3>
            </div>
         
          {/* Rendering multiple education forms */}
         
            <div  className="content" >
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

         <div className="resume-upload">
            <h3>Upload Resume</h3>
            <input type="file"  />
            </div>

          <div className="button">
            <div className="continue">Apply</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyJob
    