import http from "../plugins/axios";

export function getUserAddress(query) {
  return http.get("/addresses", {
    params: query,
  });
}

export function putUserAddress(id, body) {
  return http.put(`/addresses/${id}`, body);
}
