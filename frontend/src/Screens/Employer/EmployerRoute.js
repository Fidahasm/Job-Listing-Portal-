import React from 'react'
import{Routes,Route} from 'react-router-dom'
import EmployerDashboard from './EmployerDashboard'
import Candidates from './Candidates'
import JobForm from './JobForm'



function EmployerRoute() {
  return (
    <div>
        <Routes>
            <Route path="employer-home" element={<EmployerDashboard />} />
            <Route path='candidates' element={<Candidates/>}/>
            <Route path="job-form" element={<JobForm/>}/>

            
        </Routes>      
    </div>
  )
}

export default EmployerRoute
