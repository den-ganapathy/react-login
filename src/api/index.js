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

console.log(signin);
