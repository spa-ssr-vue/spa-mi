import http from "./../plugins/axios";

export function login(model = {}) {
  return http.post("/auth/login", model);
}

export function register(model = {}) {
  return http.post("/auth/register", model);
}

export function getUserInfo(query = {}) {
  return http.get("/auth/user", {
    params: query,
  });
}
