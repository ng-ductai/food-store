import axios from "axios";
import queryString from "query-string";

const baseURL = "https://food2982.herokuapp.com/";

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error.message);
    throw error;
  }
);

export default axiosClient;
