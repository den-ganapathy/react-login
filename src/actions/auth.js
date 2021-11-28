import {
  AUTH,
  CHECK_EMAIL,
  UPDATE_PASSWORD,
  START_LOADING,
  END_LOADING,
} from "./../constants/actionTypes";
import * as api from "./../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  console.log(navigate);

  try {
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const checkEmail = (email) => async (dispatch) => {
  try {
    const { data } = await api.checkEmail(email);
    console.log(data);
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
