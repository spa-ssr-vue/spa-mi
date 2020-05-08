import http from "../plugins/axios";

export function getResources(resourceName) {
  return http.get(`/${resourceName}`);
}

export function getResource(resourceName, id) {
  return http.get(`/${resourceName}/${id}`);
}

export function createResource(resourceName, body) {
  return http.post(`/${resourceName}`, body);
}

export function putResource(resourceName, id, body) {
  return http.put(`/${resourceName}/${id}`, body);
}

export function deleteResource(resourceName, id) {
  return http.delete(`/${resourceName}/${id}`);
}
