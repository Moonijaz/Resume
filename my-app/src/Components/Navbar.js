
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import {link} from "react-router";

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
          <li><link>Candidates</link></li>
          <li><link>Jobs</link></li>
        </ul>
      </nav>
    </body>
  );
}

export default Navbar;
