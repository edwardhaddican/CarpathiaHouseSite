import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isAdmin }) => {
  return (
    <div className="nav_bar_container">
      <div className="nav-link-container">
        <Link to={"/home"} className="nav_item">
          Home
        </Link>
        <Link to={"/calender"} className="nav_item">
          Calender
        </Link>

        {isAdmin ? (
          <Link to={"/members"} className="nav_item">
            Members
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
