import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Screens/HomePage/HomePage";
import Login from "./Screens/Login/Login";
import Registration from "./Screens/Login/Registration"
import Admin from "./Screens/Admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Registration/>}/>
        <Route path="/admin" element = {<Admin/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
