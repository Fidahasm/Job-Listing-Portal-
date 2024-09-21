import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import HomePage from "./Screens/HomePage/HomePage";
import Login from "./Screens/Login/Login";
import Registration from "./Screens/Login/Registration"
import Admin from "./Screens/Admin/Admin";
import SignIn from "./Screens/Login/SignIn";
import EmployerRegistration from "./Screens/Employer/EmployerRegistration";
import JobForm from "./Screens/Employer/JobForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Registration/>}/>
        <Route path="/employer-register" element = {<EmployerRegistration/>}/>
        <Route path="/admin" element = {<Admin/>}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/job-form" element={<JobForm/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
