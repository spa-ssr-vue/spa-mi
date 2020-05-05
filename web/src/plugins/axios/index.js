import Vue from "vue";
import axios from "axios";
import { storage } from "./../../utils";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/web/api",
});

http.interceptors.request.use(
  config => {
    if (storage.getItem("auth", "token")) {
      config.headers.authorization = `bearer ${storage.getItem(
        "auth",
        "token"
      )}`;
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
http.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    const error = err.response.data;
    if (error.status === 422 || error.status === 401) {
      console.log(222222);
      Vue.prototype.$message({
        type: "warning",
        message: error.message,
      });
    }
    return Promise.reject(err);
  }
);

Vue.prototype.$http = http;
export default http;
