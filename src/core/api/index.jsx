/* eslint-disable  */
import axios from "axios";
const https = require("https");

const axiosConfig = {
  baseURL: `https://45.94.156.194/api/`,
  // Додайте параметр rejectUnauthorized зі значенням false для відключення перевірки сертифікату
  httpsAgent: https.Agent({ rejectUnauthorized: false }),
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
