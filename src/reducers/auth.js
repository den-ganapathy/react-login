import {
  AUTH,
  LOGOUT,
  CHECK_EMAIL,
  UPDATE_PASSWORD,
} from "./../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case CHECK_EMAIL:
      return action.payload;
    case UPDATE_PASSWORD:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
