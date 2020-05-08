import http from "./../plugins/axios";
import { storage } from "./../utils";

export function login(body = {}) {
  return http.post("/auth/login", body);
}

export function register(body = {}) {
  return http.post("/auth/register", body);
}

export function getUserInfo(query = {}) {
  return http.get("/auth/user", {
    params: query,
  });
}

export function logout() {
  storage.removeItem("auth", "token");
  storage.removeItem("auth", "user");
  window.location.reload();
}
