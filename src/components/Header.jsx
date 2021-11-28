import React, { useContext } from "react";
import { HeaderWrapper } from "../styles/headerStyles";
import { useDispatch } from "react-redux";
import { PageContext } from "./../root/Routes";
import { navigate } from "@reach/router";
function Header({ activepage }) {
  const dispatch = useDispatch();
  const setActivePage = useContext(PageContext);

  const handleLogout = () => {
    setActivePage("register");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <HeaderWrapper>
      {activepage !== "register" && (
        <button onClick={() => handleLogout()} className="logout">
          Logout
        </button>
      )}
    </HeaderWrapper>
  );
}

export default Header;
