import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src="../src/img/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ExerciseList">Exercise List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
