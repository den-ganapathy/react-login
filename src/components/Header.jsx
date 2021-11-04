import React from "react";
import { HeaderWrapper } from "../styles/headerStyles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Header({ activepage }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignIn = () => {};
  const handleSignUp = () => {};
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/register");
  };
  return (
    <HeaderWrapper>
      {activepage === "register" ? (
        <>
          <button onClick={() => handleSignIn()} className="signin">
            Sign In
          </button>
          <button onClick={() => handleSignUp()} className="signup">
            Sign Up
          </button>
        </>
      ) : (
        <button onClick={() => handleLogout()} className="signup">
          Logout
        </button>
      )}
    </HeaderWrapper>
  );
}

export default Header;
