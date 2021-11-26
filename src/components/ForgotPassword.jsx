import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ForgotpasswordWrapper } from "./../styles/forgotpasswordStyles";
import { checkEmail, updatePassword } from "../actions/auth";
import { navigate } from "@reach/router";

const ForgotPassword = () => {
  const [submitEmail, setSubmitEmail] = useState(false);
  const [submitOtp, setSubmitOtp] = useState(false);
  const [submitPassword, setSubmitPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const emailData = useSelector((state) => state.auth);

  const updatePasswordData = useSelector((state) => state.auth);

  console.log(emailData, updatePasswordData);

  const handleSubmit = () => {
    console.log(otp);
    if (otp === "1111") {
      setSubmitOtp(true);
      setSubmitEmail(false);
      submitPassword(false);
    }
  };

  console.log(formData);

  const handleConfirm = () => {
    console.log(formData.password, formData.confirmpassword);
    if (formData.password === formData.confirmpassword) {
      dispatch(updatePassword({ formData }));
      console.log(updatePasswordData.message);
    }
  };
  const handleNext = async () => {
    dispatch(checkEmail({ email: formData.email }));
    console.log(emailData);
    if (emailData.message === "user exist") {
      setSubmitEmail(true);
    }
    console.log(emailData);
  };

  const handleLogin = () => {
    setErrorMessage("");
    if (emailData.message === "user exist") {
      setSubmitPassword(false);
      setSubmitOtp(false);
      setSubmitEmail(true);
    } else if (otp === "1111") {
      setSubmitPassword(false);
      setSubmitOtp(true);
      setSubmitEmail(false);
    } else {
      setSubmitPassword(true);
      setSubmitOtp(false);
      setSubmitEmail(false);
    }
  };

  const handleBack = () => {
    // if (submitPassword) {
    //   setSubmitPassword(false);
    //   setSubmitOtp(true);
    // } else if (submitOtp) {
    //   setSubmitOtp(false);
    //   setSubmitEmail(true);
    // } else if (submitEmail) {
    //   setSubmitOtp(false);
    //   setSubmitEmail(false);
    // } else {
    navigate("/login");
    // }
  };

  const handleChange = (e) => {
    console.log(formData);

    if (e.target.id !== "otp") {
      console.log(formData);
      setFormData({ ...formData, [e.target.id]: e.target.value });
    } else {
      setOtp(e.target.value);
    }
  };

  useEffect(() => {
    // handleLogin();
  }, [emailData.message, handleLogin, updatePasswordData.message]);

  return (
    <ForgotpasswordWrapper>
      <div className="fp-container">
        <div className="fp-title">
          {submitEmail ? (
            <div>
              Please enter the OTP <p>Enter Otp as 1111 to bypass this step</p>
            </div>
          ) : submitOtp || submitPassword ? (
            ""
          ) : (
            "Please enter your registered email"
          )}
        </div>
        {!submitEmail && !submitOtp && !submitPassword && (
          <input
            id="email"
            type="text"
            value={formData.email}
            className="fp-textbox"
            onChange={(e) => handleChange(e)}
            required
          ></input>
        )}
        {errorMessage !== "" && <div>{errorMessage}</div>}
        {submitEmail && (
          <input
            id="otp"
            type="text"
            value={otp}
            maxLength={4}
            className="fp-textbox"
            onChange={(e) => handleChange(e)}
            required
          ></input>
        )}
        {submitOtp && (
          <>
            <div className="fp-title">Enter New Password</div>
            <input
              id="password"
              type="password"
              className="fp-textbox"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <div className="fp-title">Confirm Password</div>
            <input
              id="confirmpassword"
              value={formData.confirmpassword}
              type="password"
              className="fp-textbox"
              onChange={(e) => handleChange(e)}
            ></input>
          </>
        )}
        {submitPassword && (
          <div className="congratulations-text">
            {" "}
            Congratulations, Your Password has been changed Successfully
          </div>
        )}
        <div className="fp-button">
          {!submitPassword && (
            <button className="fb-button-back" onClick={() => handleBack()}>
              Go Back
            </button>
          )}
          <button
            className="fb-button-next"
            onClick={
              submitPassword
                ? () => navigate("/register")
                : submitOtp
                ? () => handleConfirm()
                : submitEmail
                ? () => handleSubmit()
                : () => handleNext()
            }
          >
            {submitPassword
              ? "Login"
              : submitOtp
              ? "Confirm Changes"
              : submitEmail
              ? "Submit Otp"
              : "Next"}
          </button>
        </div>
      </div>
    </ForgotpasswordWrapper>
  );
};

export default ForgotPassword;
