import React, { useState } from "react";
import Home from "./../Pages/Home";
import { Router } from "@reach/router";

import SignIn from "../Pages/SignIn";
import Header from "./../components/Header";
import ForgotPassword from "../components/ForgotPassword";
// import SignIn from "./../Pages/SignIn";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const AuthenticatedLanding = () => {
  return (
    <>
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
};

export default AuthenticatedLanding;
