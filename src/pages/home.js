import React from 'react'
import Login from './login';
import './home.css'
import Register from './register';
import Chatcontainer from '../components/chatcontainer';
import { BrowserRouter as Router, Route, Link as Rlink, Routes } from "react-router-dom";

function Home() {
  
  
  return (


    <Router>
      
      <Routes>
      
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/chatcontainer" element={<Chatcontainer />} />
        <Route exact path="Register" element={<Register />} />
       
      </Routes>

    </Router>



  )
}

export default Home