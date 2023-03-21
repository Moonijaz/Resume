
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <body>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">NavBar</label>
        <ul>
          <li>
            <a href="#">Candidates</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
        </ul>
      </nav>
    </body>
  );
}

export default Navbar;
