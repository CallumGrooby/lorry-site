import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ServicesHeroSection } from "../components/ServicesHeroSection";
import backgroundImage from "../assets/lorrys-groups.png";
import { ServicesContentSection } from "../components/ServicesContentSection";
import warehouseImage from "../assets/about-us-warehouse.jpg";
import officeImage from "../assets/about-us-office.jpg";
import lorryImage from "../assets/about-us-lorry.jpg";
import drivingImage from "../assets/about-us-driving.jpg";
import aboveLorryImage from "../assets/about-us-abovelorrys.jpg";
export const AboutUs = () => {
  return (
    <body>
      <NavigationBar></NavigationBar>
      <ServicesHeroSection
        hasNavbar={false}
        img={backgroundImage}
        title={"About Us"}
        text={
          "Welcome to FreshLinc, where our journey of excellence in supply chain management began in 1996. Over the years, we have evolved into a leading service provider, specializing in temperature-controlled logistics across the UK and Europe."
        }
      ></ServicesHeroSection>

      <ContentSection />
      <Footer></Footer>
    </body>
  );
};

const content = [
  {
    title: "Our History",
    text: "Founded with a vision to revolutionize the logistics industry, FreshLinc has a rich history of established operations, continual expansion, and unwavering commitment to excellence. Our journey is marked by milestones that reflect our dedication to delivering secure and efficient supply chain solutions.",
    image: warehouseImage,
  },
  {
    title: "Our Mission",
    text: "At FreshLinc, our mission is to optimize supply chains through cutting-edge services. We take pride in our diverse offerings, from state-of-the-art storage facilities to advanced temperature-controlled transport. Our commitment extends to ensuring secure and timely deliveries, meeting the unique needs of our clients",
    image: officeImage,
  },
  {
    title: "Global Presence",
    text: "Explore our European Operation, where we facilitate reliable international trade. Our global expansion reflects our dedication to providing seamless logistics solutions on an international scale.",
    image: lorryImage,
  },
  {
    title: "Tailored Services",
    text: "Our multi-divisional services are designed to cover unique 3PL requirements. We tailor our offerings to support just-in-time supply chains, providing customized solutions that drive efficiency and excellence.",
    image: drivingImage,
  },
  {
    title: "Innovation at the Core",
    text: "Innovation is at the core of FreshLinc. We leverage the latest technologies and industry best practices to stay ahead in the ever-evolving logistics landscape. Our commitment to innovation ensures that we consistently exceed expectations and set new standards in the industry.",
    image: aboveLorryImage,
  },
];

const ContentSection = () => {
  return (
    <section className="services-info">
      <div className="container">
        <div className="title-section">
          <h1>About Us</h1>
          <p>
            Welcome to FreshLinc, where our journey of excellence in supply
            chain management began in 1996. Over the years, we have evolved into
            a leading service provider, specializing in temperature-controlled
            logistics across the UK and Europe.
          </p>
        </div>
      </div>

      <ServicesContentSection
        content={content}
        hasIcons={false}
      ></ServicesContentSection>
    </section>
  );
};
