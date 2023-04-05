
import React from 'react';
import "./Nav2.css";

function Navbar2() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="#">Skills</a>
        <div className="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-items">
            <li className="navbar-item"><a className="navbar-link" href="#">Home</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Candidates</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Jobs</a></li>
            <li className="navbar-item"><a className="navbar-link" href="#">Sign In</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
