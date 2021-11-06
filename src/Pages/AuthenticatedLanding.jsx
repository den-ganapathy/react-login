import React, { useState } from "react";
import Home from "./../Pages/Home";
// import SignIn from "./../Pages/SignIn";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AuthenticatedLanding = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default AuthenticatedLanding;
