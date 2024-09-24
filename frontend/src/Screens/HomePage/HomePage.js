import React, { useEffect, useState } from 'react';
import './Home.css';

function HomePage() {
  const [jobs, setJobs] = useState([]);
  
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
                  <div key={job.id} className="job-box animate-job" style={{ animationDelay: `${index * 0.2}s` }}>
                    <h3>{job.title}</h3>
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
                <div key={job.id} className="job-box animate-job" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3>{job.title}</h3>
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Experience:</strong> {job.experience}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Job Type:</strong> {job.jobType}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="right-div"></div>
      </div>
    </div>
  );
}

export default HomePage;
