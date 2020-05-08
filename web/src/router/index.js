import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home/Home.vue";
import HomeIndex from "../views/Home/HomeIndex.vue";

import User from "../views/User/User.vue";
import UserOrder from "../views/User/UserOrder.vue";
import UserCenter from "../views/User/UserCenter.vue";
import UserAddress from "../views/User/UserAddress.vue";
import UserService from "../views/User/UserService.vue";
import UserManager from "../views/User/UserManager.vue";

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
    path: "/user",
    name: "user",
    component: User,
    children: [
      { path: "/user/order", name: "user-order", component: UserOrder },
      { path: "/user/center", name: "user-center", component: UserCenter },
      { path: "/user/address", name: "user-address", component: UserAddress },
      { path: "/user/service", name: "user-service", component: UserService },
      { path: "/user/manager", name: "user-manager", component: UserManager },
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
      {
        path: "/order/confirm",
        name: "order-confirm",
        component: OrderConfirm,
      },
      {
        path: "/order/pay/:id",
        name: "order-pay",
        component: OrderPay,
        props: true,
      },
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
