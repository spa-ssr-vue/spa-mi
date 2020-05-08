import http from "../plugins/axios";

export function getBanner(id) {
  return http.get(`/banners/${id}`);
}


