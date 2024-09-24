import React, { useEffect, useState } from 'react';
import './Home.css';

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

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

  // Simulated job data
  useEffect(() => {
    const fetchedJobs = [
      { id: 1, title: 'Frontend Developer', company: 'Google', location: 'California', experience: 'fresher', salary: 15000, jobType: 'OnSite' },
      { id: 2, title: 'Backend Developer', company: 'Amazon', location: 'Washington', experience: 'fullTime', salary: 60000, jobType: 'Remote' },
      { id: 3, title: 'Full Stack Developer', company: 'Microsoft', location: 'Texas', experience: 'internship', salary: 8000, jobType: 'OnSite' },
      { id: 4, title: 'Data Scientist', company: 'Facebook', location: 'New York', experience: 'freelance', salary: 85000, jobType: 'Remote' },
      { id: 5, title: 'UI/UX Designer', company: 'Adobe', location: 'San Francisco', experience: 'fresher', salary: 20000, jobType: 'OnSite' },
      { id: 6, title: 'Cloud Engineer', company: 'IBM', location: 'Chicago', experience: 'fullTime', salary: 70000, jobType: 'Remote' },
      { id: 7, title: 'DevOps Engineer', company: 'Intel', location: 'Boston', experience: 'freelance', salary: 90000, jobType: 'OnSite' },
      { id: 8, title: 'Machine Learning Engineer', company: 'Nvidia', location: 'Los Angeles', experience: 'internship', salary: 10000, jobType: 'OnSite' },
      { id: 9, title: 'Cybersecurity Analyst', company: 'Cisco', location: 'Miami', experience: 'fullTime', salary: 80000, jobType: 'Remote' },
      { id: 10, title: 'Software Engineer', company: 'Tesla', location: 'Nevada', experience: 'fresher', salary: 30000, jobType: 'OnSite' },
      { id: 11, title: 'Database Administrator', company: 'Oracle', location: 'Austin', experience: 'fullTime', salary: 75000, jobType: 'Remote' },
      { id: 12, title: 'Network Engineer', company: 'HP', location: 'Denver', experience: 'freelance', salary: 65000, jobType: 'OnSite' },
      { id: 13, title: 'Technical Support Engineer', company: 'Dell', location: 'San Diego', experience: 'internship', salary: 12000, jobType: 'Remote' },
      { id: 14, title: 'Mobile App Developer', company: 'Snapchat', location: 'Seattle', experience: 'fresher', salary: 25000, jobType: 'OnSite' },
      { id: 15, title: 'Product Manager', company: 'Spotify', location: 'New York', experience: 'fullTime', salary: 95000, jobType: 'Remote' },
      { id: 16, title: 'Game Developer', company: 'Sony', location: 'Los Angeles', experience: 'freelance', salary: 85000, jobType: 'OnSite' },
      { id: 17, title: 'Blockchain Developer', company: 'Coinbase', location: 'San Francisco', experience: 'fullTime', salary: 100000, jobType: 'Remote' },
      { id: 18, title: 'AR/VR Developer', company: 'Meta', location: 'New York', experience: 'internship', salary: 15000, jobType: 'OnSite' },
      { id: 19, title: 'AI Researcher', company: 'OpenAI', location: 'Texas', experience: 'fullTime', salary: 110000, jobType: 'Remote' },
      { id: 20, title: 'IT Consultant', company: 'Accenture', location: 'Chicago', experience: 'freelance', salary: 60000, jobType: 'OnSite' },
      { id: 21, title: 'Data Engineer', company: 'Netflix', location: 'San Francisco', experience: 'fresher', salary: 50000, jobType: 'OnSite' },
      { id: 22, title: 'QA Engineer', company: 'Samsung', location: 'New York', experience: 'fullTime', salary: 65000, jobType: 'Remote' },
      { id: 23, title: 'Salesforce Developer', company: 'Salesforce', location: 'Denver', experience: 'freelance', salary: 90000, jobType: 'Remote' },
      { id: 24, title: 'Business Analyst', company: 'Google', location: 'California', experience: 'internship', salary: 20000, jobType: 'OnSite' },
      { id: 25, title: 'Systems Engineer', company: 'SpaceX', location: 'Texas', experience: 'fullTime', salary: 75000, jobType: 'OnSite' },
      { id: 26, title: 'Solutions Architect', company: 'AWS', location: 'Seattle', experience: 'freelance', salary: 85000, jobType: 'Remote' },
      { id: 27, title: 'Digital Marketing Specialist', company: 'TikTok', location: 'Los Angeles', experience: 'fullTime', salary: 60000, jobType: 'OnSite' },
      { id: 28, title: 'Big Data Engineer', company: 'Uber', location: 'San Francisco', experience: 'fresher', salary: 45000, jobType: 'OnSite' },
      { id: 29, title: 'IT Support Specialist', company: 'Microsoft', location: 'New York', experience: 'internship', salary: 18000, jobType: 'Remote' },
      { id: 30, title: 'Software Architect', company: 'Google', location: 'California', experience: 'fullTime', salary: 120000, jobType: 'OnSite' }

    ];
    setJobs(fetchedJobs);
  }, []);

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
      <div className="header"></div>
      <div className="job-listing-container">
        <div className="left-div">
          <div className="profile"></div>
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
                  <div key={job.id} className="job-box animate-job" style={{ animationDelay: `${index * 0.2}s` }} onClick={() => handleJobDescription(job)}>
                    <div className="logo">
                      <img src="" alt="" />
                      <h3>{job.title}</h3>


                    </div>
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Experience:</strong> {job.experience}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Job Type:</strong> {job.jobType}</p>
                  </div>
                ))
              ) : (
                <p>No jobs match the selected filters.</p>
              )
            ) : (
              jobs.map((job, index) => (
                <div key={job.id} className="job-box animate-job" style={{ animationDelay: `${index * 0.2}s` }} onClick={() => handleJobDescription(job)}>
                  <div className="logo">
                    <img src='data:image/png;base64,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' alt="" />
                    <div className="name">
                      <h3>{job.title}</h3>
                      <div className="det">
                      <p> {job.company}</p>
                      <p> {job.location}</p>
                      </div>
                     

                    </div>



                  </div>
                  <p><strong>Experience:</strong> {job.experience}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Job Type:</strong> {job.jobType}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {selectedJob && (
          <div className="right-div">

            <div className="job-description">
              <h2>{selectedJob.title}</h2>
              <p><strong>Company:</strong> {selectedJob.company}</p>
              <p><strong>Location:</strong> {selectedJob.location}</p>
              <p><strong>Experience:</strong> {selectedJob.experience}</p>
              <p><strong>Salary:</strong> {selectedJob.salary}</p>
              <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
              {/* Add more job details here */}
            </div>
          </div>

        )}
      </div>
    </div>
  );
}

export default HomePage;
