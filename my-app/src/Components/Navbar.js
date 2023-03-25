
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function Navbar() {
  return (
    <body>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Skills</label>
        <BrowserRouter>
        <ul>
          <li><Link to={"/Candidates"}>Candidates</Link></li>
          <li><Link to={"/Jobs"}>Jobs</Link></li>
        </ul>
        </BrowserRouter>
      </nav>
    </body>
  );
}
export default Navbar;
