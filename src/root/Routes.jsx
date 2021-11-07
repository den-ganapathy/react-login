import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import SignIn from "../Pages/SignIn";
import AuthenticatedLanding from "../Pages/AuthenticatedLanding";
import Home from "./../Pages/Home";
import Header from "./../components/Header";
import ForgotPassword from "../components/ForgotPassword";

export const PageContext = React.createContext();

const Routes = () => {
  const [activepage, setActivepage] = useState("register");

  return (
    <PageContext.Provider value={setActivepage}>
      <Router>
        <Header activepage={activepage} />
        {/* <ProtectedRoute
          path="/*"
          component={AuthenticatedLanding}
          setActivepage={setActivepage}
        /> */}
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={SignIn} />
      </Router>
    </PageContext.Provider>
  );
};

export default Routes;
