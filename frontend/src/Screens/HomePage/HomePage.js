import React, {useEffect, useState} from 'react'
import './Home.css'

function HomePage() {
  const [jobs, setJobs] = useState([]);

  // Simulate fetching jobs from an API
  useEffect(() => {
    const fetchedJobs = [
      { id: 1, title: 'Frontend Developer', company: 'Google', location: 'California' },
      { id: 2, title: 'Backend Developer', company: 'Amazon', location: 'Washington' },
      { id: 3, title: 'Full Stack Developer', company: 'Microsoft', location: 'Texas' },
      { id: 4, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 5, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 6, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 7, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 8, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 9, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 10, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 11, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 12, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 13, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 14, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 15, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 16, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 17, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 18, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 19, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 20, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 21, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 22, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 23, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 24, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 25, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 26, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
      { id: 27, title: 'Data Scientist', company: 'Facebook', location: 'New York' },
    ];
    setTimeout(() => setJobs(fetchedJobs), 1000); // Add a delay to simulate API loading
  }, []);

  return (
    <div className="job-listing-container">
      <h1 className="title">Job Listings</h1>
      <div className="jobs">
        {jobs.map((job, index) => (
          <div key={job.id} className="job-box animate-job" style={{ animationDelay: `${index * 0.2}s` }}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
