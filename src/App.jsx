import { Routes } from "./utils/Routes";
import "../src/assets/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWarehouse,
  faTruck,
  faEarthEurope,
  faSnowflake,
  faPallet,
  faStar,
  faEye,
  faTrain,
  faShip,
  faUsers,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faFacebook, faLinkedin, faInstagram);
library.add(
  faWarehouse,
  faTruck,
  faEarthEurope,
  faSnowflake,
  faPallet,
  faStar,
  faEye,
  faTrain,
  faShip,
  faUsers,
  faScaleBalanced
);

function App() {
  return (
    <>
      <FontAwesomeIcon icon={"facebook"}></FontAwesomeIcon>
      {/* <GoogleMapSection></GoogleMapSection> */}
      <Routes></Routes>
    </>
  );
}

export default App;
