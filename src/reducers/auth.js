import {
  AUTH,
  LOGOUT,
  CHECK_EMAIL,
  UPDATE_PASSWORD,
} from "./../constants/actionTypes";

const authReducer = (state = { authData: null, loading: true }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data, loading: false, errors: null };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    case CHECK_EMAIL:
      return {
        ...state,
        authData: action.payload,
        loading: false,
        errors: null,
      };
    case UPDATE_PASSWORD:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
