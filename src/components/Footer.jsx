import React from "react";
import logo from "../assets/freshlincs-logo.png";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="company-info">
          <img src={logo}></img>
          <p>
            Wardentree Park
            <br />
            Pinchbeck
            <br />
            Spalding
            <br />
            Lincolnshire
            <br />
            PE11 3ZN
            <br />
          </p>

          <p>
            +44 (0)1775 710900
            <br />
            information@freshlinc.com
          </p>

          <div className="social-links">
            <FontAwesomeIcon
              className="icon"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icon"
              icon={faInstagram}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icon"
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </div>
        </div>

        <div className="footer-navigation">
          <div className="column">
            <h1>Services</h1>
            <NavLink className="services-link" to={"/services/warehousing"}>
              Warehousing Services
            </NavLink>
            <NavLink className="services-link" to={"/services/transport"}>
              Transportation Services
            </NavLink>
            <NavLink
              className="services-link"
              to={"/services/internation-logistics"}
            >
              International Logistics
            </NavLink>
          </div>

          <div className="column">
            <h1>Company</h1>
            <NavLink className="services-link" to={"/services/warehousing"}>
              About Us
            </NavLink>
            <NavLink className="services-link" to={"/services/transport"}>
              Contact Us
            </NavLink>
            <NavLink
              className="services-link"
              to={"/services/internation-logistics"}
            >
              Locations
            </NavLink>
            <NavLink
              className="services-link"
              to={"/services/internation-logistics"}
            >
              Group Divisions
            </NavLink>
          </div>

          <div className="column">
            <h1>Staff</h1>
            <NavLink className="services-link" to={"/home"}>
              Order Entry
            </NavLink>
            <NavLink className="services-link" to={"/home"}>
              POD/CMR (SSL)
            </NavLink>
            <NavLink className="services-link" to={"/home"}>
              Holiday Requests
            </NavLink>
            <NavLink className="services-link" to={"/home"}>
              Fresh Linc Login
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
