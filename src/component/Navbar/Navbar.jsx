import React,{useEffect} from 'react'

import './Navbar.css';
import {Link} from "react-router-dom"
function Navbar() {
;
  return (
    
       <div>
        <nav className="navbar">
  <div className="logo">
    <img src="images/logog.png" alt="logo" />
  </div>
  
  <div className="nav-links">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Causes">Causes</Link></li>
      <li><Link to="/Aboutus">About Us</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </div>
  
  <div className="hamburger" id="hamburger">
    <i className="fas fa-bars"></i>
  </div>
</nav>

    </div>
  );
}

export default Navbar;
