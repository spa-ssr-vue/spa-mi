import Vue from "vue";
import SiteHeader from "./../../components/SiteHeader.vue";
import SiteFooter from "./../../components/SiteFooter.vue";
import SiteMiniHeader from "./../../components/SiteMiniHeader.vue";

const componentArr = [SiteHeader, SiteFooter, SiteMiniHeader];

for (const component of componentArr) {
  Vue.component(component.name, component);
}
