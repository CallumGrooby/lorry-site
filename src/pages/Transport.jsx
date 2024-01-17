import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import warehouseBackgroundImage from "../assets/lorrysingle-groups.png";
import { ServicesContentSection } from "../components/ServicesContentSection";
import image01 from "../assets/transport01.png";
import image02 from "../assets/transport02.png";
export const Transport = () => {
  const [data, setData] = useOutletContext();
  const content = [
    {
      title: "Chilled Transport",
      text: `Offering a wide range of chilled storage solutions through individual chambers,
                    each meeting specific temperature requirements to ensure the safety,legality, and quality of stored products.
                    UCAS calibrated automated sensors are used to monitor temperatures as part of FreshLinc’s BRCGS certified Quality Management System. 
                    Stock management is provided through the Optima Warehouse Management System,which can automatically produce intake, despatch,
                    and stock records to provide full visibility to the customer.`,
      image: image01,
    },
    {
      title: "Ambient Transport",
      text: `Storage is offered through our Ambient division, FLX. With our latest addition being a brand new 140,000 square foot, state of the art BREEAM ‘Excellent’ rated facility, located in Peterborough.
            Services include devanning shipping containers through storage, case or pallet picking and cross dock facility for onward distribution.
            The Optima Warehouse Management system provides 100% visibility of stock throughout its time in the facility and beyond through utilisation of our groups versatile fleet.`,
      image: "",
    },
    {
      title: "Cross-Docking Excellence",
      text: `Experience the efficiency of our cross-docking services that streamline your distribution process. 
      Our strategically located facilities and advanced systems facilitate swift and secure transfers,
      reducing handling times and enhancing overall supply chain agility.`,
      image: image02,
    },
  ];

  const iconName = [
    { icon: "star", text: "BREEAM Excellent Rated", color: "#E5C82A" },
  ];

  useEffect(() => {
    setData({
      title: "Transport Services",
      text: "Embark on a journey with FreshLinc's Transport Services, where excellence meets efficiency in the world of logistics. With over 20 years of solid experience, we've evolved into a leading service provider across the UK and Europe. Our state-of-the-art facilities and a modern fleet ensure that we deliver on our commitment to provide cost-effective, highly efficient services tailored to meet each customer's individual needs.",
      image: warehouseBackgroundImage,
      hasNavbar: true,
    });
  }, []);

  return (
    <div>
      <ServicesContentSection
        content={content}
        hasIcons={true}
        iconArray={iconName}
        hasNavbar={true}
      ></ServicesContentSection>
    </div>
  );
};
