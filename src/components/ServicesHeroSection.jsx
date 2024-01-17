import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export const ServicesHeroSection = ({ title, text, img, hasNavbar }) => {
  return (
    <>
      <section
        className="services-hero-section"
        style={{
          backgroundImage: `url(${img})`,
          objectFit: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-container">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {hasNavbar && (
          <nav className="services-navbar">
            <span className="line"></span>

            <div className="links">
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
          </nav>
        )}
      </section>
    </>
  );
};

ServicesHeroSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  hasNavbar: PropTypes.bool,
};
