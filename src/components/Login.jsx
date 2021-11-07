import React, { useState, useContext } from "react";
import { LoginWrapper, InputWrapper } from "./../styles/loginStyles";
import { IconButton } from "./../styles/buttonStyles";
import fbIcon from "./../assets/images/fbIcon.png";
import gmailIcon from "./../assets/images/gmailIcon.png";
import twitterIcon from "./../assets/images/twitterIcon.png";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PageContext } from "./../root/Routes";
import { signin, signUp } from "./../actions/auth";

function Login() {
  const [formData, setFormData] = useState({});
  const [signIn, setSignIn] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const setActivePage = useContext(PageContext);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      setActivePage("home");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("unsuccessful");
  };

  const handleForm = () => {
    if (signIn) {
      dispatch(signin(formData, history));
    } else {
      dispatch(signUp(formData, history));
    }
  };

  const renderTextbox = (id, label, type = "text") => {
    console.log(formData, id);
    return (
      <InputWrapper>
        <div className="label">{label}</div>
        <div className="inputbox1">
          <input
            id={id}
            type={type}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            className=""
          ></input>
        </div>
      </InputWrapper>
    );
  };

  return (
    <LoginWrapper>
      <div className="login-container">
        {!signIn && renderTextbox("firstname", "Firstname")}
        {!signIn && renderTextbox("lastname", "Lastname")}
        {renderTextbox("email", "Email")}
        {renderTextbox("password", "Password", "password")}
        {!signIn &&
          renderTextbox("confirmpassword", "Confirm Password", "password")}
        {signIn && (
          <div
            onClick={() => history.push("/forgot-password")}
            className="forgotpassword"
          >
            {" "}
            Forgot Password
          </div>
        )}
        <button className="signin" onClick={() => handleForm()}>
          {signIn ? "Sign In" : "Register"}
        </button>
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
        {signIn ? (
          <div className="formfooter" onClick={() => setSignIn(false)}>
            Dont have account? Sign Up
          </div>
        ) : (
          <div className="formfooter" onClick={() => setSignIn(true)}>
            Already Have An Account? Sign In
          </div>
        )}
      </div>
    </LoginWrapper>
  );
}

export default Login;
