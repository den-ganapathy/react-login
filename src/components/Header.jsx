import React from "react";
import { HeaderWrapper } from "../styles/headerStyles";

function Header() {
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
