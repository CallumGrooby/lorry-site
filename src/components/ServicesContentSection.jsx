import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ServicesContentSection = ({ content, hasIcons, iconArray }) => {
  console.log(content);

  return (
    <section className="services-info">
      <div className="container">
        {content.map((section, index) => {
          return (
            <article key={index} className="content">
              <div className="text-container">
                <h1>
                  {section.title}
                  <span className="full-stop" />
                </h1>
                <p>{section.text}</p>
              </div>

              <div className="image-holder">
                {hasIcons & (section.image == "" || section.image == null) ? (
                  <IconedSection icons={iconArray} />
                ) : (
                  <img src={section.image} />
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

const IconedSection = ({ icons }) => {
  return (
    <section
      className={icons.length == 1 ? "single-icon-section" : "icon-section"}
    >
      {icons.map((icon, index) => {
        return (
          <div key={index} className="icon-holder">
            <FontAwesomeIcon
              className="icon"
              icon={icon.icon}
              style={{ color: icon.color }}
            />
            <h1>{icon.text}</h1>
          </div>
        );
      })}
    </section>
  );
};

ServicesContentSection.propTypes = {
  content: PropTypes.array,
  hasIcons: PropTypes.bool,
  iconArray: PropTypes.array,
};

IconedSection.propTypes = {
  icons: PropTypes.array,
};
