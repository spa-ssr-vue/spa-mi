import Vue from "vue";
import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/admin/api",
});

globalThis.axios = http;

// Vue.prototype.$httpajax = http;
Vue.prototype.$http = http;

export default http;
