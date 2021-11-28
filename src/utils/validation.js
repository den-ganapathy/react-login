var mailformat =
  /^(([^<`~!@₹€π°√△¶©®÷#$%^&*_=+?|'"/*>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Validation = async (value, formData, error, setError) => {
  switch (value) {
    case "SignIn": {
      if (formData.loginEmail === "") {
        setError((prevState) => ({
          ...error,
          loginEmail: "Please Enter Email Id",
        }));
      } else if (!mailformat.test(formData.loginEmail)) {
        setError((prevState) => ({
          ...prevState,
          loginEmail: "Please Enter valid Email",
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          loginEmail: "",
        }));
      }

      if (formData.loginPassword === "") {
        setError((prevState) => ({
          ...prevState,
          loginPassword: "Please Enter Password",
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          loginPassword: "",
        }));
      }
      break;
    }
    case "SignUp": {
      if (formData.email === "") {
        setError((prevState) => ({
          ...prevState,
          email: "Please Enter Email Id",
        }));
      } else if (!mailformat.test(formData.email)) {
        setError((prevState) => ({
          ...prevState,
          email: "Please Enter valid Email",
        }));
      } else {
        setError({ ...error, email: "" });
      }
      if (formData.username === "") {
        setError((prevState) => ({
          ...prevState,
          username: "Please Enter User Name",
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          username: "",
        }));
      }
      if (formData.password === "") {
        setError((prevState) => ({
          ...prevState,
          password: "Please Enter Password",
        }));
      } else if (formData.password.length < 6) {
        setError((prevState) => ({
          ...prevState,
          password: "Password length should be 6+ Characters",
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          password: "",
        }));
      }
      if (formData.confirmpassword === "") {
        setError((prevState) => ({
          ...prevState,
          confirmpassword: "Please Enter Password",
        }));
      } else if (formData.confirmpassword !== formData.password) {
        setError((prevState) => ({
          ...prevState,
          confirmpassword: "Password Does Not Match",
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          confirmpassword: "",
        }));
      }
      break;
    }
    default: {
      console.log("");
    }
  }
};
