import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <p >
        We can be reached at: carpathia.holdfast@gmail.com
      </p>

      <Link className="footer-link"
        to={{ pathname: "https://wiki.eastkingdom.org/wiki/House_Carpathia" }}
        target="_blank"
      >
        Our Wiki
      </Link>
    </div>
  );
};

export default Footer;
