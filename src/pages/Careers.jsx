import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { HeroSection } from "../components/HeroSection";
import backgroundImage from "../assets/lorry-hero01.png";
import { CurrentVacancies } from "../utils/CurrentVacancies";
export const Careers = () => {
  const icons = [
    { iconName: "users", text: "Collaborative Teams" },
    { iconName: "earth-europe", text: "Global Opportunities" },
    { iconName: "scale-balanced", text: "Work Life Balance" },
  ];
  return (
    <div>
      <NavigationBar />

      <HeroSection
        altStyle={true}
        title={"Explore Opportunities at FreshLinc"}
        text={
          "Discover growth, innovation, and efficiency in our cutting-edge facilities. Be part of a team committed to excellence."
        }
        img={backgroundImage}
        icons={icons}
      />

      <CurrentVacancies />
    </div>
  );
};
