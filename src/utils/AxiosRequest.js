import axios from "axios";
import jwt_decode from "jwt-decode";

const axiosLogin = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});
const axiosRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

axiosRequest.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      destroyToken();
    }
  }
);

function saveToken(access_token, rememberMe) {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
}

function getToken() {
  try {
    return jwt_decode(localStorage.getItem("access_token"));
  } catch (error) {}
}

function destroyToken() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("rememberMe");
  window.location.pathname = "/login";
}

export { axiosLogin, axiosRequest, destroyToken, getToken, saveToken };