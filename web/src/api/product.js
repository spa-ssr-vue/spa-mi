import http from "./../plugins/axios";

export function getProductList(query) {
  return http.get("/products", {
    params: query,
  });
}

export function getProduct(id, query) {
  return http.get(`/products/${id}`, {
    params: query,
  });
}
