import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { GroupDivisions } from "../pages/GroupDivisions";
import { Careers } from "../pages/Careers";
import { Warehousing } from "../pages/Warehousing";
import { InternationLogistics } from "../pages/InternationLogistics";
import { Transport } from "../pages/Transport";
import { ErrorPage } from "../pages/ErrorPage";
import { Services } from "../pages/Services";
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" element={<Home />} />

        <Route path="/services" element={<Services />}>
          <Route index element={<Warehousing />} />
          <Route path="warehousing" element={<Warehousing />} />
          <Route
            path="internation-logistics"
            element={<InternationLogistics />}
          />
          <Route path="transport" element={<Transport />} />
        </Route>

        <Route path="/group-divisions" element={<GroupDivisions />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/*" element={<ErrorPage />} />
      </Switch>
    </Router>
  );
};
