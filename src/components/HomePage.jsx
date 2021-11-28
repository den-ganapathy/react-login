import React, { useState, useEffect, useContext } from "react";
import { HomeWrapper } from "../styles/homeStyles";
import { PageContext } from "./../root/Routes";

function HomePage() {
  const setActivePage = useContext(PageContext);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setActivePage("home");
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [setActivePage]);
  const { name, imageUrl } = user?.result;
  const { username } =
    user?.result[0] === undefined ? user?.result : user?.result[0];
  return (
    <HomeWrapper>
      <img
        src={
          imageUrl === undefined
            ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            : imageUrl
        }
        alt={name}
      />
      <div className="body">
        Hello {name} {username} , Have a good day
      </div>
    </HomeWrapper>
  );
}

export default HomePage;
