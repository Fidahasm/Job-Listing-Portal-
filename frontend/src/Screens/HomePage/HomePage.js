import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Home.css';
import locationPin from '../../assets/location-pin.png';


function HomePage() {
  const navigate  = useNavigate()
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const gotoEmployerPage = () =>{
    navigate('/employer/employer-home');
  }
  const gotoLoginPage = () =>{
    navigate('/login')
  }
  // Filters state
  const [experienceFilter, setExperienceFilter] = useState({
    internship: false,
    fresher: false,
    freelance: false,
    fullTime: false,
  });

  const [salaryFilter, setSalaryFilter] = useState({
    low: false,    // 1000-10000
    mid: false,    // 10001-25000
    high: false,   // 50001-75000
    veryHigh: false,  // 75000+
  });

  const [jobTypeFilter, setJobTypeFilter] = useState({
    OnSite: false,
    Remote: false,
  });
  const [likedJobs,setLikedJobs]=useState({})

  // Simulated job data
  useEffect(() => {
    const fetchedJobs = [
      { 
        id: 1, title: 'Frontend Developer', company: 'Google', location: 'California', 
        experience: 'fresher', salary: 15000, jobType: 'OnSite', 
        postedDate: '2024-09-25', applicants: 25, 
        description: 'Design and implement user interfaces using React and CSS for Google’s internal web apps.',
        logoUrl: 'https://logo.clearbit.com/google.com'
      },
      { 
        id: 2, title: 'Backend Developer', company: 'Amazon', location: 'Washington', 
        experience: 'fullTime', salary: 60000, jobType: 'Remote', 
        postedDate: '2024-09-24', applicants: 30, 
        description: 'Develop scalable APIs and manage databases for Amazon’s cloud platforms using Node.js and AWS.',
        logoUrl: 'https://logo.clearbit.com/amazon.com'
      },
      { 
        id: 3, title: 'Full Stack Developer', company: 'Microsoft', location: 'Texas', 
        experience: 'internship', salary: 8000, jobType: 'OnSite', 
        postedDate: '2024-09-22', applicants: 40, 
        description: 'Work on both frontend and backend tasks for Microsoft’s internal tools using React and Express.js.',
        logoUrl: 'https://logo.clearbit.com/microsoft.com'
      },
      { 
        id: 4, title: 'Data Scientist', company: 'Facebook', location: 'New York', 
        experience: 'freelance', salary: 85000, jobType: 'Remote', 
        postedDate: '2024-09-21', applicants: 55, 
        description: 'Analyze large datasets to help drive business decisions and improve Facebook’s recommendation algorithms.',
        logoUrl: 'https://logo.clearbit.com/facebook.com'
      },
      { 
        id: 5, title: 'UI/UX Designer', company: 'Adobe', location: 'San Francisco', 
        experience: 'fresher', salary: 20000, jobType: 'OnSite', 
        postedDate: '2024-09-20', applicants: 18, 
        description: 'Create user-friendly designs for Adobe’s creative products, focusing on enhancing customer experience.',
        logoUrl: 'https://logo.clearbit.com/adobe.com'
      },
      { 
        id: 6, title: 'Cloud Engineer', company: 'IBM', location: 'Chicago', 
        experience: 'fullTime', salary: 70000, jobType: 'Remote', 
        postedDate: '2024-09-19', applicants: 35, 
        description: 'Manage and optimize cloud-based infrastructure using IBM Cloud and other third-party tools.',
        logoUrl: 'https://logo.clearbit.com/ibm.com'
      },
      { 
        id: 7, title: 'DevOps Engineer', company: 'Intel', location: 'Boston', 
        experience: 'freelance', salary: 90000, jobType: 'OnSite', 
        postedDate: '2024-09-18', applicants: 22, 
        description: 'Develop automated deployment pipelines and manage Intel’s cloud infrastructure using CI/CD practices.',
        logoUrl: 'https://logo.clearbit.com/intel.com'
      },
      { 
        id: 8, title: 'Machine Learning Engineer', company: 'Nvidia', location: 'Los Angeles', 
        experience: 'internship', salary: 10000, jobType: 'OnSite', 
        postedDate: '2024-09-17', applicants: 10, 
        description: 'Work on machine learning algorithms to improve performance of Nvidia’s graphics and AI models.',
        logoUrl: 'https://logo.clearbit.com/nvidia.com'
      },
      { 
        id: 9, title: 'Cybersecurity Analyst', company: 'Cisco', location: 'Miami', 
        experience: 'fullTime', salary: 80000, jobType: 'Remote', 
        postedDate: '2024-09-16', applicants: 42, 
        description: 'Monitor and protect Cisco’s network infrastructure from cyber threats and security breaches.',
        logoUrl: 'https://logo.clearbit.com/cisco.com'
      },
      { 
        id: 10, title: 'Software Engineer', company: 'Tesla', location: 'Nevada', 
        experience: 'fresher', salary: 30000, jobType: 'OnSite', 
        postedDate: '2024-09-15', applicants: 50, 
        description: 'Work on Tesla’s internal software tools, focusing on vehicle automation and AI integration.',
        logoUrl: 'https://logo.clearbit.com/tesla.com'
      },
      { 
        id: 11, title: 'Database Administrator', company: 'Oracle', location: 'Austin', 
        experience: 'fullTime', salary: 75000, jobType: 'Remote', 
        postedDate: '2024-09-14', applicants: 20, 
        description: 'Manage and optimize Oracle’s databases for performance and scalability across various projects.',
        logoUrl: 'https://logo.clearbit.com/oracle.com'
      },
      { 
        id: 12, title: 'Network Engineer', company: 'HP', location: 'Denver', 
        experience: 'freelance', salary: 65000, jobType: 'OnSite', 
        postedDate: '2024-09-13', applicants: 28, 
        description: 'Design and maintain secure and efficient network architectures for HP’s enterprise solutions.',
        logoUrl: 'https://logo.clearbit.com/hp.com'
      },
      { 
        id: 13, title: 'Technical Support Engineer', company: 'Dell', location: 'San Diego', 
        experience: 'internship', salary: 12000, jobType: 'Remote', 
        postedDate: '2024-09-12', applicants: 15, 
        description: 'Provide technical assistance and troubleshoot issues for Dell’s enterprise customers.',
        logoUrl: 'https://logo.clearbit.com/dell.com'
      },
      { 
        id: 14, title: 'Mobile App Developer', company: 'Snapchat', location: 'Seattle', 
        experience: 'fresher', salary: 25000, jobType: 'OnSite', 
        postedDate: '2024-09-11', applicants: 33, 
        description: 'Develop new features for Snapchat’s mobile app using Flutter and integrate third-party services.',
        logoUrl: 'https://logo.clearbit.com/snapchat.com'
      },
      { 
        id: 15, title: 'Product Manager', company: 'Spotify', location: 'New York', 
        experience: 'fullTime', salary: 95000, jobType: 'Remote', 
        postedDate: '2024-09-10', applicants: 45, 
        description: 'Manage product development for Spotify’s streaming platform, focusing on user engagement features.',
        logoUrl: 'https://logo.clearbit.com/spotify.com'
      },
      { 
        id: 16, title: 'Game Developer', company: 'Sony', location: 'Los Angeles', 
        experience: 'freelance', salary: 85000, jobType: 'OnSite', 
        postedDate: '2024-09-09', applicants: 37, 
        description: 'Develop interactive gaming experiences for Sony PlayStation’s latest VR game titles.',
        logoUrl: 'https://logo.clearbit.com/sony.com'
      },
      { 
        id: 17, title: 'Blockchain Developer', company: 'Coinbase', location: 'San Francisco', 
        experience: 'fullTime', salary: 100000, jobType: 'Remote', 
        postedDate: '2024-09-08', applicants: 18, 
        description: 'Build and maintain blockchain smart contracts and security systems for Coinbase’s trading platforms.',
        logoUrl: 'https://logo.clearbit.com/coinbase.com'
      },
      { 
        id: 18, title: 'AR/VR Developer', company: 'Meta', location: 'New York', 
        experience: 'internship', salary: 15000, jobType: 'OnSite', 
        postedDate: '2024-09-07', applicants: 27, 
        description: 'Develop virtual reality interfaces for Meta’s social platforms using Unity and Unreal Engine.',
        logoUrl: 'https://logo.clearbit.com/meta.com'
      },
      { 
        id: 19, title: 'AI Researcher', company: 'OpenAI', location: 'Texas', 
        experience: 'fullTime', salary: 110000, jobType: 'Remote', 
        postedDate: '2024-09-06', applicants: 35, 
        description: 'Conduct research on AI and machine learning models for OpenAI’s latest projects.',
        logoUrl: 'https://logo.clearbit.com/openai.com'
      },
      { 
        id: 20, title: 'IT Consultant', company: 'Accenture', location: 'Chicago', 
        experience: 'freelance', salary: 60000, jobType: 'OnSite', 
        postedDate: '2024-09-05', applicants: 20, 
        description: 'Provide IT consultancy services to improve business efficiency for Accenture’s global clients.',
        logoUrl: 'https://logo.clearbit.com/accenture.com'
      },
      { 
        id: 21, title: 'Data Engineer', company: 'Netflix', location: 'San Francisco', 
        experience: 'fresher', salary: 50000, jobType: 'OnSite', 
        postedDate: '2024-09-04', applicants: 40, 
        description: 'Develop and maintain Netflix’s data pipelines for processing user data and content analytics.',
        logoUrl: 'https://logo.clearbit.com/netflix.com'
      },
      { 
        id: 22, title: 'QA Engineer', company: 'Samsung', location: 'New York', 
        experience: 'fullTime', salary: 65000, jobType: 'Remote', 
        postedDate: '2024-09-03', applicants: 25, 
        description: 'Test and ensure quality for Samsung’s consumer electronics and software products.',
        logoUrl: 'https://logo.clearbit.com/samsung.com'
      },
      { 
        id: 23, title: 'Salesforce Developer', company: 'Salesforce', location: 'Denver', 
        experience: 'freelance', salary: 90000, jobType: 'Remote', 
        postedDate: '2024-09-02', applicants: 18, 
        description: 'Develop and customize Salesforce applications for various clients using Apex and Visualforce.',
        logoUrl: 'https://logo.clearbit.com/salesforce.com'
      },
      { 
        id: 24, title: 'Business Analyst', company: 'Google', location: 'California', 
        experience: 'internship', salary: 20000, jobType: 'OnSite', 
        postedDate: '2024-09-01', applicants: 22, 
        description: 'Analyze business data and help improve decision-making for Google’s internal projects.',
        logoUrl: 'https://logo.clearbit.com/google.com'
      },
    ];
    setJobs(fetchedJobs);
  }, []);

  function getRelativePostedDate(postedDate) {
    const today = new Date();
    const posted = new Date(postedDate);
    const differenceInTime = today - posted;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  
    if (differenceInDays === 0) {
      return 'Today';
    } else if (differenceInDays === 1) {
      return '1 day ago';
    } else {
      return `${differenceInDays} days ago`;
    }}

  // Checkbox handlers
  const handleExperienceChange = (e) => {
    setExperienceFilter({ ...experienceFilter, [e.target.name]: e.target.checked });
  };

  const handleSalaryChange = (e) => {
    setSalaryFilter({ ...salaryFilter, [e.target.name]: e.target.checked });
  };

  const handleJobTypeChange = (e) => {
    setJobTypeFilter({ ...jobTypeFilter, [e.target.name]: e.target.checked });
  };
  const handleLike = (jobId) => {
    setLikedJobs((prevLikedJobs) => ({
      ...prevLikedJobs,
      [jobId]: !prevLikedJobs[jobId],
    }));
  };

  const handleClose = () => {
    setSelectedJob(null); // Use null or '' to clear the selected job
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("Sidebar visibility toggled:", !showSidebar); // Logging the toggled state correctly
  };
  

  // Check if any filter is applied
  const isAnyFilterApplied =
    Object.values(experienceFilter).some((val) => val) ||
    Object.values(salaryFilter).some((val) => val) ||
    Object.values(jobTypeFilter).some((val) => val);

  // Filtering logic
  const filteredJobs = jobs.filter((job) => {
    const experienceMatch =
      (!experienceFilter.internship && !experienceFilter.fresher && !experienceFilter.freelance && !experienceFilter.fullTime) ||
      (experienceFilter.internship && job.experience === 'internship') ||
      (experienceFilter.fresher && job.experience === 'fresher') ||
      (experienceFilter.freelance && job.experience === 'freelance') ||
      (experienceFilter.fullTime && job.experience === 'fullTime');

    const salaryMatch =
      (!salaryFilter.low && !salaryFilter.mid && !salaryFilter.high && !salaryFilter.veryHigh) ||
      (salaryFilter.low && job.salary <= 10000) ||
      (salaryFilter.mid && job.salary > 10000 && job.salary <= 25000) ||
      (salaryFilter.high && job.salary > 50000 && job.salary <= 75000) ||
      (salaryFilter.veryHigh && job.salary > 75000);

    const jobTypeMatch =
      (!jobTypeFilter.OnSite && !jobTypeFilter.Remote) ||
      (jobTypeFilter.OnSite && job.jobType === 'OnSite') ||
      (jobTypeFilter.Remote && job.jobType === 'Remote');

    return experienceMatch && salaryMatch && jobTypeMatch;
  });

  // Handle job selection
  const handleJobDescription = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="main">
      <div className="header">
      <i className='bx bx-filter' id='filter-icon' onClick={toggleSidebar}></i>
      <div className="nav-right-bar">
        <div className="search-main-div">
        <div className="job-title">
        <i className='bx bx-search'></i>
          <input type="text" />
          <span style={{ fontSize: '24px', cursor: 'pointer'}}>&times;</span>
        </div>
        <div className="location">
          <img src={locationPin} alt="ERROR" />
          <input type="text" />
          <span style={{ fontSize: '24px', cursor: 'pointer'}}>&times;</span>
          </div>
        <div className="find-button">Find Jobs</div>
      </div>
      <div className="sign-in-btn" onClick={gotoLoginPage}>Sign in</div>
      <div className="employer-login-btn" onClick={gotoEmployerPage}>Employers/Post Job</div>
      </div>
      </div>
      <div className="job-listing-container">
        <div className={`left-div ${showSidebar ? 'show' : ''}`}>
          <div className="profile">
         
<div className="profile-pic">
  <img src="data:image/jpeg;base64,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" alt="" />

    
    <i className='bx bx-edit'></i>

</div>
<p style={{fontSize:"16px",fontWeight:"bold",marginBottom:'0'}}>User Name</p>
<p  style={{fontSize:"15px",color:"rgb(124, 126, 129)"}}>Web Developer, C++, Python,Flutter,NodeJs</p>

          </div>
          <div className="filter-checkboxes">
            <h4>Experience Level</h4>
            <label>
              <input type="checkbox" name="internship" onChange={handleExperienceChange} /> Internship
            </label>
            <br />
            <label>
              <input type="checkbox" name="fresher" onChange={handleExperienceChange} /> Fresher
            </label>
            <br />
            <label>
              <input type="checkbox" name="freelance" onChange={handleExperienceChange} /> Freelance
            </label>
            <br />
            <label>
              <input type="checkbox" name="fullTime" onChange={handleExperienceChange} /> Full Time
            </label>
            <br />

            <h4>Salary</h4>
            <label>
              <input type="checkbox" name="low" onChange={handleSalaryChange} /> 1000-10000
            </label>
            <br />
            <label>
              <input type="checkbox" name="mid" onChange={handleSalaryChange} /> 10001-25000
            </label>
            <br />
            <label>
              <input type="checkbox" name="high" onChange={handleSalaryChange} /> 50001-75000
            </label>
            <br />
            <label>
              <input type="checkbox" name="veryHigh" onChange={handleSalaryChange} /> 75000+
            </label>
            <br />

            <h4>Job Type</h4>
            <label>
              <input type="checkbox" name="OnSite" onChange={handleJobTypeChange} /> On Site
            </label>
            <br />
            <label>
              <input type="checkbox" name="Remote" onChange={handleJobTypeChange} /> Remote
            </label>
          </div>
        </div>

        <div className="center-div">
          <div className="jobs">
            {isAnyFilterApplied ? (
              filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div key={job.id} className="job-box animate-job" style={{ animationDelay: `${index * 0.2}s` }} >
                  <div className="logo" >
                    <div className="image">
                    <img onClick={() => handleJobDescription(job)} src={job.logoUrl} alt="" />

                    </div>
                    <div className="name" onClick={() => handleJobDescription(job)}>
                      <h3>{job.title}</h3>
                      <div className="det">
                        <p> {job.company}</p>
                        <div style={{ width: '15px' }}></div>
                        <p> {job.location}</p>
                      </div>
                    </div>
                    
                   

                  </div>
                  <div className="type">
                    <div className="small">
                    <p> {job.experience}</p>

                    </div>
                    <div style={{width:'30px'}}></div>
                    <div className="small">
                    <p> {job.jobType}</p>

                    </div>
                    <div style={{width:'30px'}}></div>

                    <div className="small">
                    <p><strong>₹</strong> {job.salary}</p>

                    </div>

                  </div>
                  <div className="desc">
                    <p>{job.description}</p>
                  </div>
                  <div className="details">
                    <p style={{color:'rgb(124, 126, 129)'}}> {getRelativePostedDate(job.postedDate)}</p>
                  <p style={{color:'rgba(0, 81, 255, 0.893)'}}>{job.applicants} Applicants</p>
                 <div onClick={() => handleLike(job.id)}>
                    {likedJobs[job.id] ?( <i className='bx bxs-bookmark-star' style={{color:' rgb(0, 170, 255)'}}></i>):
                   (<i className='bx bx-bookmark'  ></i>)
                   }
                    </div>
                  </div>
                 
                </div>
                ))
              ) : (
                <p>No jobs match the selected filters.</p>
              )
            ) : (
              jobs.map((job, index) => (
                <div key={job.id} className="job-box animate-job" style={{ animationDelay: `${index * 0.2}s` }} >
                  <div className="logo" >
                    <div className="image">
                    <img onClick={() => handleJobDescription(job)} src={job.logoUrl} alt="" />

                    </div>
                    <div className="name" onClick={() => handleJobDescription(job)}>
                      <h3>{job.title}</h3>
                      <div className="det">
                        <p> {job.company}</p>
                        <div style={{ width: '15px' }}></div>
                        <p> {job.location}</p>
                      </div>
                    </div>
                    
                   

                  </div>
                  <div className="type">
                    <div className="small">
                    <p> {job.experience}</p>

                    </div>
                    <div style={{width:'30px'}}></div>
                    <div className="small">
                    <p> {job.jobType}</p>

                    </div>
                    <div style={{width:'30px'}}></div>

                    <div className="small">
                    <p><strong>₹</strong> {job.salary}</p>

                    </div>

                  </div>
                  <div className="desc">
                    <p>{job.description}</p>
                  </div>
                  <div className="details">
                    <p style={{color:'rgb(124, 126, 129)'}}> {getRelativePostedDate(job.postedDate)}</p>
                  <p style={{color:'rgba(0, 81, 255, 0.893)'}}>{job.applicants} Applicants</p>
                 <div onClick={() => handleLike(job.id)}>
                    {likedJobs[job.id] ?( <i className='bx bxs-bookmark-star' style={{color:' rgb(0, 170, 255)'}}></i>):
                   (<i className='bx bx-bookmark'  ></i>)
                   }
                    </div>
                  </div>
                 
                </div>
              ))
            )}
          </div>
        </div>

        {selectedJob && (
          <div className="right-div animate-job">

            <div className="job-description">
              <div className="slct-img">
                <img src={selectedJob.logoUrl} alt="" />
                <div className="close-btn" onClick={handleClose}>
                <p  >X</p>

                </div>
                
              </div>
              <h3 style={{marginBottom:'0'}}>{selectedJob.title}</h3>
              <h4 style={{color:'rgba(0, 81, 255, 0.893)',marginTop:'5px'}}> {selectedJob.company}</h4>
              <hr/>
              <div className="job-type">
                <div className="sub">
                  <p style={{marginBottom:'0px',color:'rgb(124, 126, 129)',fontSize:'13px'}}>Job-type</p>
                <p style={{fontWeight:'600',marginTop:'8px'}}> {selectedJob.jobType}</p>
                </div>
                <div className="sub">
                  <p style={{marginBottom:'0px',color:'rgb(124, 126, 129)',fontSize:'13px'}}>Work-type</p>
                <p style={{fontWeight:'600',marginTop:'8px'}}> {selectedJob.experience}</p>
                </div>
              
              </div>
              <div className="job-type">
              <div className="sub">
                  <p style={{marginBottom:'0px',color:'rgb(124, 126, 129)',fontSize:'13px'}}>Location</p>
                <p style={{fontWeight:'600',marginTop:'8px'}}> {selectedJob.location}</p>
                </div>
                <div className="sub">
                  <p style={{marginBottom:'0px',color:'rgb(124, 126, 129)',fontSize:'13px'}}>Salary</p>
                <p style={{fontWeight:'600',marginTop:'8px'}}> ₹ {selectedJob.salary}</p>
                </div>
               
              
              </div>
              <hr />
              <div className="job-desc">
                <p><strong>Description</strong></p>
                <p>{selectedJob.description}</p>
                <div style={{height:'8px'}}></div>
                <p><strong>Requirement</strong></p>
                <p>{selectedJob.description}</p>
                <div className="btn" >
                <div className="apply-btn">
                  Apply
                </div>
                </div>
                
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  );
}

export default HomePage;
