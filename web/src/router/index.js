import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home/Home.vue";
import Index from "../views/Home/Index.vue";

import Product from "../views/Product/Product.vue";
import ProductDetail from "../views/Product/ProductDetail.vue";
import ProductBuy from "../views/Product/ProductBuy.vue";

import Cart from "../views/Cart/Cart.vue";

import Order from "../views/Order/Order.vue";
import OrderConfirm from "../views/Order/OrderConfirm.vue";
import OrderPay from "../views/Order/OrderPay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: Index,
      },
    ],
  },
  {
    path: "/products",
    name: "product",
    component: Product,
    children: [
      {
        path: "/products/:id",
        name: "product-detail",
        component: ProductDetail,
      },
      {
        path: "/products/buy/:id",
        name: "product-buy",
        component: ProductBuy,
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    children: [
      { path: "/", name: "order-confirm", component: OrderConfirm },
      { path: "/order/pay", name: "order-pay", component: OrderPay },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
