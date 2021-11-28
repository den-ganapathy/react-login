import React, { useState, useContext, useEffect } from "react";
import { LoginWrapper, InputWrapper } from "./../styles/loginStyles";
import googleIcon from "./../assets/images/google.png";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { PageContext } from "./../root/Routes";
import { signin, signUp } from "./../actions/auth";
import { navigate } from "@reach/router";
import { Validation } from "./../utils/validation";

function Login() {
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState({
    loginEmail: "",
    loginPassword: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const dispatch = useDispatch();
  const setActivePage = useContext(PageContext);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      setActivePage("home");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("unsuccessful");
  };

  const handleForm = async () => {
    if (signIn) {
      await Validation("SignIn", formData, error, setError);
      setError(error);
      dispatch(signin(formData, navigate, setLoginError));
    } else {
      await Validation("SignUp", formData, error, setError);
      if (
        !error.email ||
        !error.password ||
        !error.username ||
        !error.confirmpassword
      ) {
        dispatch(signUp(formData, navigate, setSignUpError));
      }
    }
  };

  const renderTextbox = (id, label, type = "text", size = "half") => {
    return (
      <InputWrapper size={size}>
        <div className="label">{label}</div>
        <div className="inputbox1">
          <input
            required
            id={id}
            type={type}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.id]: e.target.value });
            }}
            className=""
          ></input>
        </div>
      </InputWrapper>
    );
  };

  useEffect(() => {
    setError(error);
  }, [error]);

  return (
    <LoginWrapper>
      <div className="login-container">
        {loginError && (
          <div className="form-error">Wrong username or Password Entered</div>
        )}
        {signUpError && (
          <div className="form-error">
            {formData.email === "" ||
            formData.username === "" ||
            formData.password === "" ||
            formData.confirmpassword === ""
              ? "Please Enter all required Fields"
              : "User with Email Id already exists"}
          </div>
        )}

        <div className="textbox">
          {signIn && renderTextbox("loginEmail", "Email", "text", "full")}
          {error.loginEmail && signIn && (
            <div className="error-message">*{error.loginEmail}</div>
          )}
          {signIn &&
            renderTextbox("loginPassword", "Password", "password", "full")}
          {error.loginPassword && signIn && (
            <div className="error-message">*{error.loginPassword}</div>
          )}

          {!signIn && renderTextbox("username", "Username", "text", "full")}
          {error.username && !signIn && (
            <div className="error-message">*{error.username}</div>
          )}

          {!signIn && renderTextbox("email", "Email", "text", "full")}
          {error.email && !signIn && (
            <div className="error-message">*{error.email}</div>
          )}
          {!signIn && renderTextbox("password", "Password", "password", "full")}
          {error.password && !signIn && (
            <div className="error-message">*{error.password}</div>
          )}
          {!signIn &&
            renderTextbox(
              "confirmpassword",
              "Confirm Password",
              "password",
              "full"
            )}
          {error.confirmpassword && !signIn && (
            <div className="error-message">*{error.confirmpassword}</div>
          )}
        </div>
        {/* {signIn && (
          <div
            onClick={() => navigate("/forgot-password")}
            className="forgotpassword"
          >
            {" "}
            Forgot Password
          </div>
        )} */}
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
          <div
            className="formfooter"
            onClick={() => {
              setSignIn(false);
              setLoginError(false);
              setError({
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
              });
            }}
          >
            Dont have account? Sign Up
          </div>
        ) : (
          <div
            className="formfooter"
            onClick={() => {
              setSignIn(true);
              setSignUpError(false);
              setError({ loginEmail: "", loginPassword: "" });
            }}
          >
            Already Have An Account? Sign In
          </div>
        )}
      </div>
    </LoginWrapper>
  );
}

export default Login;
