import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ForgotpasswordWrapper } from "./../styles/forgotpasswordStyles";
import { checkEmail, updatePassword } from "../actions/auth";

const ForgotPassword = () => {
  const [submitEmail, setSubmitEmail] = useState(false);
  const [submitOtp, setSubmitOtp] = useState(false);
  const [submitPassword, setSubmitPassword] = useState(false);

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
    }
  };

  console.log(formData);

  const handleConfirm = () => {
    console.log(formData.password, formData.confirmpassword);
    if (formData.password === formData.confirmpassword) {
      dispatch(updatePassword({ formData }));
      console.log(updatePasswordData.message);
      if (updatePasswordData.message === "Success") {
        setSubmitPassword(true);
        setSubmitOtp(false);
      }
    }
  };
  const handleNext = () => {
    dispatch(checkEmail({ email: formData.email })).then((res) => {
      console.log(res);
      console.log(emailData.message);
      if (emailData.message === "user exist") {
        setSubmitEmail(true);
        setSubmitOtp(false);
      }
    });
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
    console.log(formData);

    if (e.target.id !== "otp") {
      console.log(formData);
      setFormData({ ...formData, [e.target.id]: e.target.value });
    } else {
      setOtp(e.target.value);
    }
  };

  useEffect(() => {}, []);

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
          <input
            id="otp"
            type="text"
            maxLength={4}
            className="fp-textbox"
            onChange={(e) => handleChange(e)}
            required
          ></input>
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
