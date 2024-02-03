import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/freshlincs-logo.png";
export const NavigationBar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logo} alt="Fresh Lincs Logo" />
      </div>

      <section className="navigation-links">
        <Link className="link" to={"/home"}>
          Home
        </Link>
        <Link className="link" to={"/about-us"}>
          About Us
        </Link>
        <Link className="link" to={"/services"}>
          Services
        </Link>
        <Link className="link" to={"/group-divisions"}>
          Group Divisions
        </Link>
        <Link className="link" to={"/careers"}>
          Careers
        </Link>
      </section>
    </nav>
  );
};
