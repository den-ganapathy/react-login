import React, { useState, useContext } from "react";
import { LoginWrapper, InputWrapper } from "./../styles/loginStyles";
import { IconButton } from "./../styles/buttonStyles";
import fbIcon from "./../assets/images/fbIcon.png";
import googleIcon from "./../assets/images/google.png";
import twitterIcon from "./../assets/images/twitterIcon.png";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PageContext } from "./../root/Routes";
import { signin, signUp } from "./../actions/auth";

function Login() {
  const [formData, setFormData] = useState({});
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
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
      dispatch(signin(formData, history)).then(() => {
        setActivePage("home");
      });
    } else {
      dispatch(signUp(formData, history)).then(() => {
        setActivePage("home");
      });
    }
  };

  const renderTextbox = (id, label, type = "text", size = "half") => {
    console.log(formData, id);
    return (
      <InputWrapper size={size}>
        <div className="label">{label}</div>
        <div className="inputbox1">
          <input
            id={id}
            type={type}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.id]: e.target.value });
              if (e.target.value === "") {
                setError({ ...error, [e.target.id]: "* cannot be empty" });
              } else {
                setError({ ...error, [e.target.id]: "" });
              }
            }}
            className=""
          ></input>
        </div>
        {error[id].length ? <div>* Required Field</div> : ""}
      </InputWrapper>
    );
  };

  return (
    <LoginWrapper>
      <div className="login-container">
        <div className="textbox">
          {!signIn && renderTextbox("firstname", "Firstname", "text")}

          {!signIn && renderTextbox("lastname", "Lastname", "text")}
          {renderTextbox("email", "Email", "text", "full")}
          {renderTextbox("password", "Password", "password", "full")}
          {!signIn &&
            renderTextbox(
              "confirmpassword",
              "Confirm Password",
              "password",
              "full"
            )}
        </div>
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
              <div className="googleicon" onClick={renderProps.onClick}>
                <img src={googleIcon} alt=""></img>
                <div>Sign In With Google</div>
              </div>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
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
