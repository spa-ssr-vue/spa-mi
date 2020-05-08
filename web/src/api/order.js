import http from "./../plugins/axios";

export function createOrder(address, orderItems) {
  return http.post("/orders", {
    address,
    orderItems,
  });
}

export function getOrder(id) {
  return http.get(`/orders/${id}`);
}

export function getOrders(id) {
  return http.get(`/orders`);
}
