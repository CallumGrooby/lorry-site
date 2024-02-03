import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export const HeroSection = ({
  altStyle,
  title,
  text,
  img,
  hasButton,
  buttonText,
  icons,
  toLink,
}) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${img})`,
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        alignItems: `${altStyle ? "flex-end" : "flex-start"}`,
      }}
    >
      {altStyle && <IconedSection icons={icons}></IconedSection>}

      <div
        className="content"
        style={{
          alignItems: `${altStyle ? "flex-end" : "flex-start"}`,
        }}
      >
        <h1 style={{ textAlign: `${altStyle ? "right" : "left"}` }}>{title}</h1>
        <p style={{ textAlign: `${altStyle ? "right" : "left"}` }}>{text}</p>
        {hasButton ? (
          <NavLink to={`/${toLink}`} className="action-button">
            {buttonText}
          </NavLink>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  altStyle: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  hasButton: PropTypes.bool,
  buttonText: PropTypes.string,
  icons: PropTypes.array,
  toLink: PropTypes.string,
};

const IconedSection = ({ icons }) => {
  return (
    <div className="iconed-area">
      <span className="background">
        <div className="icons">
          {icons.map((iconInfo, index) => {
            return (
              <div key={index} className="iconed-stat">
                <FontAwesomeIcon className="icon" icon={iconInfo.iconName} />
                <h1>{iconInfo.text}</h1>
              </div>
            );
          })}
        </div>
      </span>
    </div>
  );
};

IconedSection.propTypes = {
  icons: PropTypes.array,
};
