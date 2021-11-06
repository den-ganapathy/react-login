import React from "react";
import SignIn from "../Pages/SignIn";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...props
}) => {
  return false ? <Component {...props} /> : <SignIn {...props} />;
};

export default ProtectedRoute;
