import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isAdmin, isSignedIn }) => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-image-background">
        <img
          className="nav-bar-house-arms"
          src="/deviceImages/CarpathiaHouseArms.png"
          alt="House Arms - *** add official description"
        />
      </div>
      {isSignedIn ? (
        <div className="nav-link-container">
          <Link to={"/home"} className="nav-item">
            Home
          </Link>
          <Link to={"/calendar"} className="nav-item">
            Calendar
          </Link>

          <Link to={"/members"} className="nav-item">
            Members
          </Link>
          <Link to={"/gallery"} className="nav-item">
            Gallery
          </Link>
          <Link to={"/carousel"} className="nav-item">
            Carousel
          </Link>

          {isAdmin ? (
            <Link to={"/newmemberform"} className="nav-item">
              New Member Form
            </Link>
          ) : null}
        </div>
      ) : (
        <div className="nav-link-container">
          <Link to={"/home"} className="nav-item">
            Home
          </Link>
          <Link to={"/calendar"} className="nav-item">
            Calendar
          </Link>
          <Link to={"/members"} className="nav-item">
            Members
          </Link>
          <Link to={"/gallery"} className="nav-item">
            Gallery
          </Link>
          <Link to={"/carousel"} className="nav-item">
            Carousel
          </Link>

          <div className="nav-right-link-container">
            {/* <Link to={"/login"} className="nav-item">
            Login
          </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
