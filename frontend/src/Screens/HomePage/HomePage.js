import React, { useEffect, useState } from 'react';
import './Home.css';

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    experience: [],
    salary: [],
    jobType: [],
  });

  // Simulate fetching jobs from an API
  useEffect(() => {
    const fetchedJobs = [
      { id: 1, title: 'Frontend Developer', company: 'Google', location: 'California', experience: 'fresher', salary: '10001-25000', jobType: 'OnSite' },
      { id: 2, title: 'Backend Developer', company: 'Amazon', location: 'Washington', experience: 'fullTime', salary: '50001-75000', jobType: 'Remote' },
      { id: 3, title: 'Full Stack Developer', company: 'Microsoft', location: 'Texas', experience: 'internship', salary: '1000-10000', jobType: 'OnSite' },
      { id: 4, title: 'Data Scientist', company: 'Facebook', location: 'New York', experience: 'freelance', salary: '75000+', jobType: 'Remote' },
      { id: 5, title: 'UI/UX Designer', company: 'Adobe', location: 'San Francisco', experience: 'fresher', salary: '10001-25000', jobType: 'OnSite' },
      { id: 6, title: 'DevOps Engineer', company: 'IBM', location: 'Chicago', experience: 'fullTime', salary: '50001-75000', jobType: 'Remote' },
      { id: 7, title: 'QA Engineer', company: 'Intel', location: 'Austin', experience: 'freelance', salary: '25001-50000', jobType: 'OnSite' },
      { id: 8, title: 'Mobile Developer', company: 'Apple', location: 'California', experience: 'internship', salary: '1000-10000', jobType: 'Remote' },
      { id: 9, title: 'Product Manager', company: 'Netflix', location: 'Los Angeles', experience: 'fullTime', salary: '75001+', jobType: 'OnSite' },
      { id: 10, title: 'Data Analyst', company: 'Spotify', location: 'New York', experience: 'fresher', salary: '10001-25000', jobType: 'Remote' },
      { id: 11, title: 'Cybersecurity Analyst', company: 'Cisco', location: 'San Jose', experience: 'fullTime', salary: '50001-75000', jobType: 'OnSite' },
      { id: 12, title: 'Cloud Engineer', company: 'Salesforce', location: 'Seattle', experience: 'internship', salary: '1000-10000', jobType: 'Remote' },
      { id: 13, title: 'Machine Learning Engineer', company: 'NVIDIA', location: 'Santa Clara', experience: 'freelance', salary: '75000+', jobType: 'OnSite' },
      { id: 14, title: 'System Administrator', company: 'Oracle', location: 'Redwood City', experience: 'fullTime', salary: '50001-75000', jobType: 'Remote' },
      { id: 15, title: 'Network Engineer', company: 'Verizon', location: 'New Jersey', experience: 'internship', salary: '1000-10000', jobType: 'OnSite' },
      { id: 16, title: 'Blockchain Developer', company: 'Ripple', location: 'San Francisco', experience: 'freelance', salary: '75000+', jobType: 'Remote' },
      { id: 17, title: 'Game Developer', company: 'Epic Games', location: 'Cary', experience: 'fresher', salary: '10001-25000', jobType: 'OnSite' },
      { id: 18, title: 'Web Developer', company: 'Shopify', location: 'Ottawa', experience: 'fullTime', salary: '50001-75000', jobType: 'Remote' },
      { id: 19, title: 'Business Analyst', company: 'Capgemini', location: 'Atlanta', experience: 'internship', salary: '1000-10000', jobType: 'OnSite' },
      { id: 20, title: 'IT Support Specialist', company: 'Dell', location: 'Round Rock', experience: 'fresher', salary: '10001-25000', jobType: 'Remote' },
      { id: 21, title: 'SEO Specialist', company: 'HubSpot', location: 'Cambridge', experience: 'fullTime', salary: '25001-50000', jobType: 'OnSite' },
      { id: 22, title: 'Content Writer', company: 'Medium', location: 'Remote', experience: 'freelance', salary: '1000-10000', jobType: 'Remote' },
      { id: 23, title: 'Technical Writer', company: 'Atlassian', location: 'San Francisco', experience: 'internship', salary: '10001-25000', jobType: 'OnSite' },
      { id: 24, title: 'Graphic Designer', company: 'Canva', location: 'Sydney', experience: 'fresher', salary: '10001-25000', jobType: 'Remote' },
      { id: 25, title: 'Sales Engineer', company: 'Salesforce', location: 'Atlanta', experience: 'fullTime', salary: '50001-75000', jobType: 'OnSite' },
      { id: 26, title: 'DevOps Consultant', company: 'Accenture', location: 'New York', experience: 'freelance', salary: '75000+', jobType: 'Remote' },
      { id: 27, title: 'RPA Developer', company: 'UiPath', location: 'Bangalore', experience: 'internship', salary: '1000-10000', jobType: 'OnSite' },
      { id: 28, title: 'Data Engineer', company: 'DataRobot', location: 'Boston', experience: 'fullTime', salary: '50001-75000', jobType: 'Remote' },
      { id: 29, title: 'Software Architect', company: 'Trello', location: 'San Francisco', experience: 'fresher', salary: '10001-25000', jobType: 'OnSite' },
      
    ];
    setTimeout(() => setJobs(fetchedJobs), 1000); // Simulate API loading
  }, []);

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
      } else {
        updatedFilters[category].push(value);
      }
      return updatedFilters;
    });
  };

  // Filter jobs based on selected checkboxes
  const filteredJobs = jobs.filter((job) => {
    const matchesExperience = filters.experience.length === 0 || filters.experience.includes(job.experience);
    const matchesSalary = filters.salary.length === 0 || filters.salary.includes(job.salary);
    const matchesJobType = filters.jobType.length === 0 || filters.jobType.includes(job.jobType);
    return matchesExperience && matchesSalary && matchesJobType;
  });

  return (
    <div className="main">
      <div className="header"></div>
      <div className="job-listing-container">
        <div className="left-div">
          <div className="profile"></div>
          <div className="filter-checkboxes">
            <h4>Experience Level</h4>
            {['internship', 'fresher', 'freelance', 'fullTime'].map((exp) => (
              <label key={exp}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('experience', exp)}
                />
                {exp.charAt(0).toUpperCase() + exp.slice(1)}
              </label>
            ))}
            <h4>Salary</h4>
            {['1000-10000', '10001-25000', '25001-50000', '50001-75000', '75000+'].map((sal) => (
              <label key={sal}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('salary', sal)}
                />
                {sal.replace('-', ' - ')}
              </label>
            ))}
            <h4>Job Type</h4>
            {['OnSite', 'Remote'].map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobType', type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="center-div">
          <div className="jobs">
            {filteredJobs.length > 0 ? (
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
            )}
          </div>
        </div>

        <div className="right-div"></div>
      </div>
    </div>
  );
}

export default HomePage;
