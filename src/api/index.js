import axios from "axios";
const baseURL = "http://localhost:8082";

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signin = (formData) =>
  API.post(`${baseURL}/user/signin`, formData);
export const signUp = (formData) =>
  API.post(`${baseURL}/user/signup`, formData);
export const checkEmail = (formData) =>
  API.post(`${baseURL}/user/check-email`, formData);
export const updatePassword = (formData) =>
  API.put(`${baseURL}/user/change-password`, formData.formData);

console.log(signin);
