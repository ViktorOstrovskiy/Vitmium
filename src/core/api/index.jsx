/* eslint-disable  */
import axios from "axios";
import { store } from "../../store";

const axiosConfig = {
  baseURL: `http://45.94.156.194:8181/api/`,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (req) => {
    // const accessToken = docCookies.getItem("token");
    // if (accessToken && req.headers) {
    //   req.headers.Authorization = `Bearer ${accessToken}`;
    req.headers["Content-Type"] = "application/json";
    // }
    return req;
  },
  (err) => {
    throw err;
  }
);

instance.interceptors.response.use(
  async (res) => {
    console.log("API response", res.data);
    return res;
  },
  (err) => {
    throw err;
  }
);

const API = instance;

export { API };
