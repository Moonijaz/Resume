
import React from "react";
import "./Navbar.css";;
import { Link } from 'react-router-dom';




function Navbar() {
  return (
    <body>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Skills</label>
        <ul>
          <li><Link to={"/Candidates"}>Candidates</Link></li>
          <li><Link to={"/Jobs"}>Jobs</Link></li>
        </ul>
      </nav>
    </body>
  );
}
export default Navbar;
