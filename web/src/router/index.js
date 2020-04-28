import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Index from "../views/Home/Index.vue";

import Order from "../views/Order/Order.vue";

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
    path: "/order",
    name: "order",
    component: Order,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
