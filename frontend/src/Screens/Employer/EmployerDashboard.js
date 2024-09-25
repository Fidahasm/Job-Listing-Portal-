import React,{useState} from 'react'
import './EmployerDashboard.css'
import EmployerNavBar from './EmployerNavBar'

const jobs = [
  { job: "Software Engineer", candidates: "25", date: "September 15, 2024", jobStatus: "Open" },
  { job: "Data Analyst", candidates: "18", date: "August 30, 2024", jobStatus: "Closed" },
  { job: "UI/UX Designer", candidates: "10", date: "September 5, 2024", jobStatus: "Open" },
  { job: "Product Manager", candidates: "12", date: "August 28, 2024", jobStatus: "Interviewing" },
  { job: "DevOps Engineer", candidates: "30", date: "September 1, 2024", jobStatus: "Open" },
  { job: "Frontend Developer", candidates: "22", date: "September 10, 2024", jobStatus: "Open" },
  { job: "Backend Developer", candidates: "17", date: "September 2, 2024", jobStatus: "Closed" },
  { job: "Full Stack Developer", candidates: "20", date: "September 7, 2024", jobStatus: "Open" },
  { job: "Business Analyst", candidates: "15", date: "August 25, 2024", jobStatus: "Closed" },
  { job: "Project Coordinator", candidates: "8", date: "September 12, 2024", jobStatus: "Open" },
  { job: "Technical Writer", candidates: "5", date: "September 18, 2024", jobStatus: "Interviewing" },
  { job: "Quality Assurance Engineer", candidates: "27", date: "August 29, 2024", jobStatus: "Open" },
];


function EmployerDashboard() {
  const [showSearchBar,setShowSearchBar] = useState(false)
  const [searchQuery,setSearchQuery] = useState('')



const toggleSearchBar = () =>{
  setShowSearchBar(!showSearchBar);
}  
const handleSearchChange = (e) =>{
  setSearchQuery(e.target.value);
}

const filteredJobs = jobs.filter(job =>
  job.job.toLowerCase().includes(searchQuery.toLowerCase())
  
)

  return (
   <EmployerNavBar>
    <div className="body-main">

<div className="search-bar-container">
  {showSearchBar &&(
    <div className="search-bar">
      <input
      type="text"
      placeholder='Search Jobs'
      value={searchQuery}
      onChange={handleSearchChange}
       />
        <button className='srchbtn'>Search</button>
        <button className='close-btn' onClick={toggleSearchBar}>&times;</button>
    </div>
  )}
</div>



      <div className="table">
        <table>
          <thead>
            <th>Job Title</th>
            <th>Candidates </th>
            <th>Date Posted</th>
            <th>Job Status</th>
          </thead>
          <tbody>
           {filteredJobs.map((job,index)=>(
             <tr key = {index}>
             <td>{job.job}</td>
             <td>{job.candidates}</td>
             <td>{job.date}</td>
             <td>{job.jobStatus}</td>
           </tr>
           ))}
    
  </tbody>
        </table>
      </div>
      
      {!showSearchBar &&(
      <div className="search-icon" onClick={toggleSearchBar}><i class='bx bx-search'></i></div>
    )}
      <div id='post-job'>Post Job</div>

      </div>
  

   </EmployerNavBar>
  )
}

export default EmployerDashboard
