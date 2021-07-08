import axios from "axios";
import { API } from "./constants/api-config";

const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(`Response Error ${error}`);
  }
);

export default axiosInstance;
