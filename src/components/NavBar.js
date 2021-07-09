import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isAdmin, isSignedIn }) => {
  return (
    <div className="nav_bar_container">
      {isSignedIn ? (
        <div className="nav-link-container">
          <Link to={"/home"} className="nav_item">
            Home
          </Link>
          <Link to={"/calendar"} className="nav_item">
            Calendar
          </Link>

          {isAdmin ? (
            <Link to={"/members"} className="nav_item">
              Members
            </Link>
          ) : null}
          {isAdmin ? (
            <Link to={"/newmemberform"} className="nav_item">
              New Member Form
            </Link>
          ) : null}
        </div>
      ) : (
        <div className="nav-link-container">
          <Link to={"/home"} className="nav_item">
            Home
          </Link>
          <Link to={"/login"} className="nav_item">
            Login
          </Link>
          <Link to={"/register"} className="nav_item">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
