import React, { useState, useEffect } from "react";
import { HomeWrapper } from "../styles/homeStyles";
function HomePage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  useEffect(() => {
    // const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  const { name, imageUrl } = user?.result;
  return (
    <HomeWrapper>
      <img src={imageUrl} alt={name} />
      <div className="body">Hello {name} , Have a good day</div>
    </HomeWrapper>
  );
}

export default HomePage;
