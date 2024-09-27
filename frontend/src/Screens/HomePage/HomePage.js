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
      <i className='bx bx-filter' id='filter-icon'></i>
      <div className="nav-right-bar">
        <div className="search-main-div">
        <div className="job-title">
        <i class='bx bx-search'></i>
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
        <div className="left-div">
          <div className="profile">
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
          <div className="right-div">

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
