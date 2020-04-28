import Vue from "vue";
import axios from "axios";

const http = axios.create({
  baseURL: "/web/api",
});

http.interceptors.request.use(req => {
  return req;
});

http.interceptors.response.use(res => {
  return res;
});

Vue.prototype.$http = http;
export default http;
