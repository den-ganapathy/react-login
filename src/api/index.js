import axios from "axios";

const API = axios.create({ baseURL: "https://mern-login-api.herokuapp.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signin = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
export const checkEmail = (email) => API.post(`/user/check-email`, email);
export const updatePassword = (formData) =>
  API.put(`/user/change-password`, formData.formData);
