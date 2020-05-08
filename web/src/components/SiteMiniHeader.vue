<template>
  <div class="header site-mini-header">
    <div class="container">
      <div class="logo logo-site-mini fl">
        <router-link to="/"></router-link>
      </div>
      <div class="fl header-title">
        <h2 v-if="title" class="fl title">{{ title }}</h2>
        <p v-if="tips" class="fl tips">{{ tips }}</p>
      </div>
      <div class="header-user topbar-user fr">
        <div v-if="user.username" class="d-inline-block dropdown user">
          <router-link class="dropdown-toggle" to="/user">{{
            user.username
          }}</router-link>
          <div class="dropdown-menu">
            <ul class="nav nav-user">
              <li class="nav-item">
                <router-link class="nav-link" to="/user">个人中心</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/user">评价晒单</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/user">我的喜欢</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/user">小米账户</router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/"
                  @click.native.prevent="logout"
                  >退出登陆</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div v-if="user.username" class="d-inline-block">
          <span class="text-gray-1">|</span>
          <router-link class="px-5" to="/user/order">我的订单</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SiteMiniHeader",
  props: {
    title: { type: String, required: true },
    tips: { type: String },
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/helper";

.header {
  &.site-mini-header {
    box-sizing: content-box;
    height: 100px;
    border-bottom: 2px solid map-get($colors, primary);
    background-color: map-get($colors, white);

    .header-title {
      height: 48px;
      margin-top: 26px;
      .title {
        font-size: 28px;
        color: map-get($colors, dark-4);
        line-height: 48px;
        font-weight: 400;
      }
      .tips {
        height: 20px;
        line-height: 20px;
        margin: 20px 0 0 15px;
        font-size: 12px;
        color: map-get($colors, gray-7);
      }
    }

    .header-user {
      margin-top: 30px;
      line-height: 40px;
      font-size: 12px;
    }
  }
}
</style>
