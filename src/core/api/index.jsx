import axios from "axios";

const axiosConfig = {
  baseURL: `http://45.94.156.194:8181/api/`,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (req) => {
    req.headers["Content-Type"] = "application/json";
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
