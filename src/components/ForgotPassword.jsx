import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ForgotpasswordWrapper } from "./../styles/forgotpasswordStyles";

const ForgotPassword = () => {
  const [submitEmail, setSubmitEmail] = useState(false);
  const [submitOtp, setSubmitOtp] = useState(false);
  const [submitPassword, setSubmitPassword] = useState(false);

  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleSubmit = () => {
    setSubmitOtp(true);
    setSubmitEmail(false);
  };

  console.log(formData);

  const handleConfirm = () => {
    if (formData.password === formData.confirmpassword) {
      setSubmitPassword(true);
      setSubmitOtp(false);
    }
  };
  const handleNext = () => {
    setSubmitEmail(true);
    setSubmitOtp(false);
  };
  const handleLogin = () => {
    if (submitPassword) {
      history.push("/register");
    }
  };

  const handleBack = () => {
    if (submitPassword) {
      setSubmitPassword(false);
      setSubmitOtp(true);
    } else if (submitOtp) {
      setSubmitOtp(false);
      setSubmitEmail(true);
    } else if (submitEmail) {
      setSubmitOtp(false);
      setSubmitEmail(false);
    } else {
      history.push("/register");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <ForgotpasswordWrapper>
      <div className="fp-container">
        <div className="fp-title">
          {submitEmail
            ? "Please enter the OTP"
            : submitOtp || submitPassword
            ? ""
            : "Please enter your registered email"}
        </div>
        {!submitEmail && !submitOtp && !submitPassword && (
          <input
            id="email"
            type="text"
            className="fp-textbox"
            onChange={(e) => handleChange(e)}
            required
          ></input>
        )}
        {submitEmail && (
          <input type="text" className="fp-textbox" required></input>
        )}
        {submitOtp && (
          <>
            <input
              id="password"
              type="text"
              className="fp-textbox"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              id="confirmpassword"
              type="text"
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
          <button className="fb-button-back" onClick={() => handleBack()}>
            Go Back
          </button>
          <button
            className="fb-button-next"
            onClick={
              submitPassword
                ? () => history.push("/register")
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
