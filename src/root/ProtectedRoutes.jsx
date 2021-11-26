import React, { useEffect, useState } from "react";
import SignIn from "../Pages/SignIn";
// const user = JSON.parse(localStorage.getItem("profile"));
// console.log(user?.length);

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...props
}) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(user?.length, user);
  console.log(Component, isAuthenticated, props);
  return user === null || user === undefined ? (
    <SignIn {...props} />
  ) : (
    <Component {...props} />
  );
};

export default ProtectedRoute;
