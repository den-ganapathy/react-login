import React, { useContext } from "react";
import { HeaderWrapper } from "../styles/headerStyles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PageContext } from "./../root/Routes";
import { navigate } from "@reach/router";
function Header({ activepage }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const setActivePage = useContext(PageContext);
  console.log(activepage);

  const handleSignIn = () => {};
  const handleSignUp = () => {};
  const handleLogout = () => {
    setActivePage("register");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
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
