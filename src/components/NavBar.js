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

          <Link to={"/members"} className="nav_item">
            Members
          </Link>
          <Link to={"/gallery"} className="nav_item">
            Gallery
          </Link>
          <Link to={"/carousel"} className="nav_item">
            Carousel
          </Link>

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
          <Link to={"/calendar"} className="nav_item">
            Calendar
          </Link>
          <Link to={"/members"} className="nav_item">
            Members
          </Link>
          <Link to={"/gallery"} className="nav_item">
            Gallery
          </Link>
          <Link to={"/carousel"} className="nav_item">
            Carousel
          </Link>

          <div className="nav-right-link-container">
            {/* <Link to={"/login"} className="nav_item">
            Login
          </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
