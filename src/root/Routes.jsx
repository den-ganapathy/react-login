import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import SignIn from "../Pages/SignIn";
import AuthenticatedLanding from "../Pages/AuthenticatedLanding";
import Header from "./../components/Header";

export const PageContext = React.createContext();

const Routes = () => {
  const [activepage, setActivepage] = useState("register");

  return (
    <PageContext.Provider value={setActivepage}>
      <Router>
        <Header activepage={activepage} />
        <ProtectedRoute
          path="/*"
          component={AuthenticatedLanding}
          setActivepage={setActivepage}
        />
        {/* <SignIn path="/register" /> */}
      </Router>
    </PageContext.Provider>
  );
};

export default Routes;
