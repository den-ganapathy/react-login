import { AUTH, CHECK_EMAIL, UPDATE_PASSWORD } from "./../constants/actionTypes";
import * as api from "./../api/index";

export const signin =
  (formData, navigate, setLoginError) => async (dispatch) => {
    try {
      const { data } = await api.signin(formData);
      dispatch({ type: AUTH, data });
      setLoginError(false);
      navigate("/");
    } catch (error) {
      setLoginError(true);
    }
  };

export const signUp =
  (formData, navigate, setSignUpError) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
      dispatch({ type: AUTH, data });
      setSignUpError(false);
      navigate("/");
    } catch (error) {
      setSignUpError(true);
    }
  };

export const checkEmail = (email) => async (dispatch) => {
  try {
    const { data } = await api.checkEmail(email);
    dispatch({ type: CHECK_EMAIL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updatePassword(formData);
    dispatch({ type: UPDATE_PASSWORD, payload: data });
  } catch (error) {
    console.log(error);
  }
};
