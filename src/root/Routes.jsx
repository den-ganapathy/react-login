import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import ProtectedRoute from "./ProtectedRoutes";
import SignIn from "../Pages/SignIn";
import AuthenticatedLanding from "../Pages/AuthenticatedLanding";
import Home from "./../Pages/Home";
import Header from "./../components/Header";
import ForgotPassword from "../components/ForgotPassword";

export const PageContext = React.createContext();

const Routes = () => {
  const [activepage, setActivepage] = useState("register");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const user = JSON.parse(localStorage.getItem("profile"));
  // console.log(!user);

  if (isAuthenticated === undefined) {
    return <div>loading...</div>;
  }

  return (
    <PageContext.Provider value={setActivepage}>
      <Header activepage={activepage} />

      <Router>
        <ProtectedRoute path="/*" component={AuthenticatedLanding} />
        <SignIn exact path="/login" />
        <ForgotPassword exact path="/forgot-password" />
      </Router>
    </PageContext.Provider>
  );
};

export default Routes;
