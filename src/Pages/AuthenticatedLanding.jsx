import React from "react";
import Home from "./../Pages/Home";
import { Router } from "@reach/router";

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
