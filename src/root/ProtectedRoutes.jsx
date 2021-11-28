import React from "react";
import SignIn from "../Pages/SignIn";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return user === null || user === undefined ? (
    <SignIn {...props} />
  ) : (
    <Component {...props} />
  );
};

export default ProtectedRoute;
