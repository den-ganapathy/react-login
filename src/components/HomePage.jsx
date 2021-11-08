import React, { useState, useEffect } from "react";
import { HomeWrapper } from "../styles/homeStyles";
function HomePage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  const { name, imageUrl } = user?.result;
  const { firstname } = user?.result[0];
  console.log(imageUrl);
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
        Hello {name} {firstname} , Have a good day
      </div>
    </HomeWrapper>
  );
}

export default HomePage;
