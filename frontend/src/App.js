import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Screens/HomePage/HomePage";
import Login from "./Screens/Login/Login";
import Registration from "./Screens/Login/Registration"
import Admin from "./Screens/Admin/Admin";
import SignIn from "./Screens/Login/SignIn";
import 'boxicons/css/boxicons.min.css';
import UserProfile from "./UserProfile/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Registration/>}/>
        <Route path="/admin" element = {<Admin/>}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/userprofile" element={<UserProfile />}/>

      </Routes>
    </Router>
 
  );
}

export default App;
