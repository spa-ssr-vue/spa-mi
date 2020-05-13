import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";

import ResourceList from "./../components/ResourceList.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    redirect: "/index",
    children: [
      { path: "/index", name: "home", component: Home },
      {
        path: "/:resource/list",
        name: "resource-list",
        component: ResourceList,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
