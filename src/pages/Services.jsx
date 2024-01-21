import { NavigationBar } from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import { ServicesHeroSection } from "../components/ServicesHeroSection";
import { useState } from "react";
import { Footer } from "../components/Footer";

export const Services = () => {
  const [data, setData] = useState({
    title: "",
    text: "",
    image: "",
    hasNavbar: true,
  });

  return (
    <body>
      <NavigationBar />
      <ServicesHeroSection
        title={data.title}
        text={data.text}
        img={data.image}
        hasNavbar={data.hasNavbar}
      ></ServicesHeroSection>

      <Outlet context={[data, setData]} />
      <Footer></Footer>
    </body>
  );
};
