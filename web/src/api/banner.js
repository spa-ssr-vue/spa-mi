import http from "../plugins/axios";

export function getBanner(code) {
  return http.get(`/banners/${code}`);
}
