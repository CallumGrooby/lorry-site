import React from "react";
import PropTypes from "prop-types";
import { NavigationBar } from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import { ServicesHeroSection } from "../components/ServicesHeroSection";
import { useState } from "react";
import backgroundImage from "../assets/lorrys-groups.png";

import Groups from "../utils/GroupDivisions.json";
import { Footer } from "../components/Footer";

export const GroupDivisions = () => {
  console.log(Groups);
  return (
    <div>
      <NavigationBar />

      <ServicesHeroSection
        title={"Group DIVISIONS"}
        text={
          "Step into the dynamic realm of FreshLinc Group, a trailblazer in the logistics industry since its inception in 1996. Over the years, FreshLinc has evolved into a conglomerate of specialized divisions, each contributing to the group's legacy of innovation, efficiency, and excellence in logistics."
        }
        img={backgroundImage}
        hasNavbar={false}
      ></ServicesHeroSection>

      <body className="group-divisions">
        {Groups.map((DivisionGroup) => {
          return (
            <GroupHolder key={GroupDivisions.index} groupInfo={DivisionGroup} />
          );
        })}
      </body>
      <Footer></Footer>
    </div>
  );
};

const GroupHolder = ({ groupInfo }) => {
  return <GroupInfo groupInfo={groupInfo}></GroupInfo>;
};

const GroupInfo = ({ groupInfo }) => {
  return (
    <article className="group">
      <div className="group-information">
        <img src={groupInfo.logo}></img>
        <p>{groupInfo.information}</p>
        <h2>Services</h2>
        <div className="services-list">
          {groupInfo.services.map((service, index) => {
            return (
              <p key={index}>
                {service}
                <span className="line"></span>
              </p>
            );
          })}
        </div>
      </div>

      <section className="contact-information">
        {groupInfo.hasWebsite && (
          <button className="action-button">Vist Website</button>
        )}

        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>{groupInfo.contactName}</p>
          <p>{groupInfo.contactEmail}</p>
          <p>{groupInfo.contactNumber}</p>
        </div>
        <div className="address-details">
          <h2>Address</h2>
          <p>{groupInfo.contactName}</p>
          <p>{groupInfo.contactEmail}</p>
          <p>{groupInfo.contactNumber}</p>
        </div>
      </section>
    </article>
  );
};

GroupHolder.propTypes = {
  groupInfo: PropTypes.object,
};

GroupInfo.propTypes = {
  groupInfo: PropTypes.object,
};
