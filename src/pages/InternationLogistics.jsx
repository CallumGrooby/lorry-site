import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import warehouseBackgroundImage from "../assets/lorrys-groups.png";
import { ServicesContentSection } from "../components/ServicesContentSection";
import image01 from "../assets/international01.png";
import image02 from "../assets/international02.png";

export const InternationLogistics = () => {
  const [data, setData] = useOutletContext();
  const content = [
    {
      title: "UK & Ireland Distribution",
      text: `Our strategically located sites allow us to offer a variety of distribution services whether full or part load consignments.
      Regardless of destination, volume and lead time we have the expertise, equipment, network and capability to ensure a best in class service.
      With flexible methods of receiving and communicating consignment details we can meet the needs of both your supply chain and customers alike.`,
      image: image01,
    },
    {
      title: "Specialist Transport",
      text: `With our market-leading logistics ,
      we offer a national container and specialist transport service covering all main ports and rail terminals. 
      Our inland position drives efficiency into the supply chain, providing direct and national solutions on a short lead time basis. 
      Our state-of-the-art fleet,equipped with gen sets, transports fresh, ambient, 
      and frozen containers for import and export, reducing food miles and lowering CO2 emissions.`,
      image: "",
    },
    {
      title: "Europe Distribution",
      text: `With daily movements between Holland and the UK and full load logistical movements to and from southern Spain,
      our network establishes valuable links with mainland Europe. We adapt to varying seasonal profiles,
      ensuring the UK has the freshest products year-round from Northern Africa and Eastern Europe.`,
      image: image02,
    },
  ];
  const iconName = [
    { icon: "truck", text: "", color: "#17723A" },
    { icon: "train", text: "", color: "#E5C82A" },
    { icon: "ship", text: "", color: "#CC232A" },
  ];
  useEffect(() => {
    setData({
      title: "International Logistics",
      text: "Since 2009, our European Operation has been providing logistical solutions across the continent. Today, we continue to operate within the just-in-time supply chain, offering seamless solutions for chilled, ambient, horticulture, building supplies, and other 3PL services",
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
