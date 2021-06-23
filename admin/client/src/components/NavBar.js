import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="left-nav-item">
        <h2>Admin</h2>
      </div>
      <div className="right-nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/displayEmployees">View Employees</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
