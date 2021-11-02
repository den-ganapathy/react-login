import React, { useState } from "react";
import { LoginWrapper, InputWrapper } from "./../styles/loginStyles";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const renderTextbox = (id, label, value, setValue, type = "text") => {
    return (
      <InputWrapper>
        <div className="label">{label}</div>
        <div className="inputbox">
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className=""
          ></input>
        </div>
      </InputWrapper>
    );
  };

  return (
    <LoginWrapper>
      <div className="login-container">
        {renderTextbox("name", "Name", userName, setUsername)}
        {renderTextbox(
          "password",
          "Password",
          password,
          setPassword,
          "password"
        )}
        <button className="signin">Sign In</button>
      </div>
    </LoginWrapper>
  );
}

export default Login;
