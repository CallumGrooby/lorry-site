import { NavigationBar } from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import { ServicesHeroSection } from "../components/ServicesHeroSection";
import { useState } from "react";

export const Services = () => {
  const [data, setData] = useState({
    title: "",
    text: "",
    image: "",
    hasNavbar: true,
  });

  return (
    <nav>
      <NavigationBar />
      <ServicesHeroSection
        title={data.title}
        text={data.text}
        img={data.image}
        hasNavbar={data.hasNavbar}
      ></ServicesHeroSection>

      <Outlet context={[data, setData]} />
    </nav>
  );
};
