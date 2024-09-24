import React from 'react'
import{Routes,Route} from 'react-router-dom'
import EmployerDashboard from './EmployerDashboard'
import Candidates from './Candidates'



function EmployerRoute() {
  return (
    <div>
        <Routes>
            <Route path="employer-home" element={<EmployerDashboard />} />
            <Route path='candidates' element={<Candidates/>}/>
            
        </Routes>      
    </div>
  )
}

export default EmployerRoute
