import http from "./../plugins/axios";

export function addCartItem(body) {
  return http.post("/carts", body);
}

export function getCartItem() {
  return http.get("/carts");
}

export function putCartItem(id) {
  return http.put("/carts");
}

export function deleteCartItem(id) {
  return http.delete(`/carts/${id}`);
}

export function putSelected(id) {
  return http.put(`/carts/selected/${id}`);
}

export function putSelectedAll() {
  return http.put("/carts/selected/selectedAll");
}

export function putCount(id, body) {
  return http.put(`/carts/count/${id}`, body);
}
