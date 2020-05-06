import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home/Home.vue";
import HomeIndex from "../views/Home/HomeIndex.vue";

import Product from "../views/Product/Product.vue";
import ProductDetail from "../views/Product/ProductDetail.vue";
import ProductBuy from "../views/Product/ProductBuy.vue";

import Cart from "../views/Cart/Cart.vue";

import Order from "../views/Order/Order.vue";
import OrderConfirm from "../views/Order/OrderConfirm.vue";
import OrderPay from "../views/Order/OrderPay.vue";

import Auth from "../views/Auth/Auth.vue";
import AuthLogin from "../views/Auth/AuthLogin.vue";
import AuthRegister from "../views/Auth/AuthRegister.vue";
import AuthReset from "../views/Auth/AuthReset.vue";

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
        name: "home-index",
        component: HomeIndex,
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
        props: true,
      },
      {
        path: "/products/buy/:id",
        name: "product-buy",
        component: ProductBuy,
        props: true,
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
  {
    path: "/auth",
    name: "auth",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        name: "auth-login",
        component: AuthLogin,
      },
      {
        path: "/auth/register",
        name: "auth-register",
        component: AuthRegister,
      },
      {
        path: "/auth/reset",
        name: "auth-reset",
        component: AuthReset,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
