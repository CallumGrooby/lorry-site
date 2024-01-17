import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import warehouseBackgroundImage from "../assets/warehouse-hero.png";
import { ServicesContentSection } from "../components/ServicesContentSection";
import image01 from "../assets/warehouse01.png";
import image02 from "../assets/warehouse02.png";
export const Warehousing = () => {
  const [data, setData] = useOutletContext();
  const content = [
    {
      title: "Chill Storage",
      text: `Offering a wide range of chilled storage solutions through individual chambers,
                    each meeting specific temperature requirements to ensure the safety,legality, and quality of stored products.
                    UCAS calibrated automated sensors are used to monitor temperatures as part of FreshLinc’s BRCGS certified Quality Management System. 
                    Stock management is provided through the Optima Warehouse Management System,which can automatically produce intake, despatch,
                    and stock records to provide full visibility to the customer.`,
      image: image01,
    },
    {
      title: "Ambient Storage",
      text: `Storage is offered through our Ambient division, FLX. With our latest addition being a brand new 140,000 square foot, state of the art BREEAM ‘Excellent’ rated facility, located in Peterborough.
            Services include devanning shipping containers through storage, case or pallet picking and cross dock facility for onward distribution.
            The Optima Warehouse Management system provides 100% visibility of stock throughout its time in the facility and beyond through utilisation of our groups versatile fleet.`,
      image: "",
    },
    {
      title: "Value Added Service",
      text: `FreshLinc is not just about storing goods; we offer a spectrum of Value-Added Services. From order management to pallet/case picking,
            labelling, cross-docking,transhipping, decanting,label creation/application,
            to container devanning – our experienced team tailors solutions with precision to meet diverse requirements.
            
            Our Warehousing Services go beyond traditional storage; they are a strategic part of your supply chain. With advanced technologies and a commitment to efficiency,
            we ensure that your products are handled with care and delivered seamlessly to meet the demands of your business. Join us in redefining warehousing excellence.`,
      image: image02,
    },
  ];

  const iconName = [
    { icon: "pallet", text: "500,000ft² Warehouse Space", color: "#17723A" },
    { icon: "star", text: "BREEAM Excellent Rated", color: "#E5C82A" },
    { icon: "eye", text: "Optima 100% Visibility", color: "#CC232A" },
  ];

  useEffect(() => {
    setData({
      title: "Innovative Warehousing Solutions: Tailored for Your Success",
      text: "Covering over 500,000 square foot of chilled and ambient warehouse space, the FreshLinc team offer warehousing solutions for all of our customers needs.",
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
