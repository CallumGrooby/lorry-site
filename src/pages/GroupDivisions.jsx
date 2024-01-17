import React from "react";
import PropTypes from "prop-types";
import { NavigationBar } from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import { ServicesHeroSection } from "../components/ServicesHeroSection";
import { useState } from "react";
import backgroundImage from "../assets/lorrys-groups.png";

import Groups from "../utils/GroupDivisions.json";

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

      {Groups.map((DivisionGroup) => {
        return (
          <GroupHolder key={GroupDivisions.index} groupInfo={DivisionGroup} />
        );
      })}
    </div>
  );
};

const GroupHolder = ({ groupInfo }) => {
  return (
    <section>
      <GroupInfo groupInfo={groupInfo}></GroupInfo>
    </section>
  );
};

const GroupInfo = ({ groupInfo }) => {
  return (
    <article className="group">
      <div className="group-information">
        <img src={groupInfo.logo}></img>
        <p>{groupInfo.information}</p>
        <h2>Services</h2>
        {groupInfo.services.map((service, index) => {
          return (
            <p key={index}>
              {service}
              <span className="line"></span>
            </p>
          );
        })}
      </div>

      <div className="contact-information"></div>
    </article>
  );
};

GroupHolder.propTypes = {
  groupInfo: PropTypes.object,
};

GroupInfo.propTypes = {
  groupInfo: PropTypes.object,
};
