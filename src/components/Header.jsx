import React, { useState, useEffect } from "react";
import { HeaderWrapper } from "../styles/headerStyles";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  console.log(user);
  const handleSignIn = () => {};

  const handleSignUp = () => {};
  return (
    <HeaderWrapper>
      <button onClick={() => handleSignIn()} className="signin">
        Sign In
      </button>
      <button onClick={() => handleSignUp()} className="signup">
        Sign Up
      </button>
    </HeaderWrapper>
  );
}

export default Header;
