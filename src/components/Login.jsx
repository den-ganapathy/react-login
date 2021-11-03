import React, { useState } from "react";
import { LoginWrapper, InputWrapper } from "./../styles/loginStyles";
import { IconButton } from "./../styles/buttonStyles";
import fbIcon from "./../assets/images/fbIcon.png";
import gmailIcon from "./../assets/images/gmailIcon.png";
import twitterIcon from "./../assets/images/twitterIcon.png";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.pushState("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("unsuccessful");
  };

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
        <p className="textstyle">OR</p>
        <div className="icons">
          <GoogleLogin
            clientId="304748262652-cqqq0gb0mq1nvbb7jh60geg1sm8msptf.apps.googleusercontent.com"
            render={(renderProps) => (
              <IconButton
                bgImg={gmailIcon}
                onClick={renderProps.onClick}
              ></IconButton>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
          <IconButton bgImg={fbIcon}></IconButton>
          <IconButton bgImg={twitterIcon}></IconButton>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default Login;