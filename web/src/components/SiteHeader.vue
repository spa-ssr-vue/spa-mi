<template>
  <header class="header">
    <div class="header-topbar bg-dark-3 text-gray-3 fs-12">
      <div class="container clearfix">
        <div class="topbar-nav nav nav-top fl">
          <a class="nav-link" href="javascript:;">小米商城</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">MIUI</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">IoT</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">云服务</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">金融</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">有品</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">小爱开放平台</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">企业团购</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">资质证照</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">协议规则</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">下载app</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">Select Location</a>
        </div>
        <div class="topbar-user fr">
          <div v-if="auth.user.username" class="d-inline-block dropdown user">
            <router-link class="dropdown-toggle" to="/user">{{
              auth.user.username
            }}</router-link>
            <div class="dropdown-menu">
              <ul class="nav nav-user">
                <li class="nav-item">
                  <router-link class="nav-link" to="/user"
                    >个人中心</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user"
                    >评价晒单</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user"
                    >我的喜欢</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user"
                    >小米账户</router-link
                  >
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
          <div v-else class="d-inline-block">
            <router-link class="px-5" to="/auth/login">登录</router-link>
            <span class="">|</span>
            <router-link class="px-5" to="/auth/register">注册</router-link>
            <span class="">|</span>
          </div>
          <a class="px-10" href="javascript:;">消息通知</a>
          <div v-if="auth.user.username" class="d-inline-block">
            <span class="">|</span>
            <router-link class="px-10" to="/user/order">我的订单</router-link>
          </div>
          <div class="dropdown cart">
            <a class="dropdown-toggle" href="javascript:;"
              ><i class="icon icon-cart"></i><span>购物车</span
              ><span>(0)</span></a
            >
            <div class="dropdown-menu">
              <div>购物车中还没有商品，赶紧选购吧！</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav text-dark-3 fs-16">
      <div class="container clearfix">
        <div class="logo fl">
          <router-link to="/"></router-link>
        </div>
        <div class="search fr">
          <form action="/">
            <input type="text" /><span class="icon icon-search"></span>
          </form>
        </div>
        <ul class="nav nav-site fr">
          <li class="nav-item dropdown site">
            <a class="nav-link dropdown-toggle" href="javascript:;">小米手机</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown site">
            <a class="nav-link dropdown-toggle" href="javascript:;"
              >Redmi 红米</a
            >
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown site">
            <a class="nav-link dropdown-toggle" href="javascript:;">电视</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown site">
            <a class="nav-link dropdown-toggle" href="javascript:;">笔记本</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown site">
            <a class="nav-link dropdown-toggle" href="javascript:;">家电</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown site">
            <a class="nav-link dropdown-toggle" href="javascript:;">路由器</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown site">
            <a class="nav-link dropdown-toggle" href="javascript:;">智能硬件</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">服务</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;">社区</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import { storage } from "./../utils";

export default {
  name: "NavHeader",
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    logout() {
      storage.removeItem("auth", "token");
      storage.removeItem("auth", "user");
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/helper";
.header {
  .header-topbar {
    height: 40px;
    line-height: 40px;
    .topbar-nav,
    .topbar-user {
      span {
        color: map-get($colors, dark-4);
      }
    }

    .topbar-nav {
      span {
        margin: 0 7px;
      }
    }

    .topbar-user {
      > a {
        &:hover {
          color: map-get($colors, white);
        }
      }
    }
  }

  .header-nav {
    height: 100px;
    line-height: 100px;
    position: relative;
    .logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      margin-right: 0;
      margin-top: 22px;
      background-color: map-get($colors, primary);
      overflow: hidden;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before,
        &:after {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background-size: center;
          transform: translateZ(0);
          transition: all 0.2s;
        }
        &:before {
          background: url("./../../public/imgs/mi-logo.png") no-repeat center;
        }
        &:after {
          background: url("./../../public/imgs/mi-home.png") no-repeat center;
        }
        &:hover:before,
        &:hover:after {
          transform: translateX(-55px);
          transition: all 0.2s;
        }
      }
    }

    .search {
      width: 296px;
      input {
        width: 245px;
        height: 50px;
        outline: none;
      }
    }
  }

  .nav {
    &.nav-top {
      .nav-link {
        display: inline-block;
        &:hover {
          color: map-get($colors, white);
        }
      }
    }

    &.nav-site {
      width: 650px;
      margin-right: 40px;
      .nav-item {
        float: left;
        padding: 0 10px;
      }
    }

    &.nav-user {
      width: 110px;
      padding: 7px 0;
      .nav-item {
        .nav-link {
          padding: 3px 30px;
          line-height: 2;
          color: map-get($colors, dark-4);
          &:hover {
            color: map-get($colors, primary);
          }
        }
      }
    }
  }

  .dropdown {
    &.user {
      position: relative;
      width: 110px;
      text-align: center;
      &:hover {
        background-color: map-get($colors, white);
        .dropdown-toggle {
          color: map-get($colors, primary);
        }
        .dropdown-menu {
          height: 170px;
        }
      }

      .dropdown-menu {
        background-color: map-get($colors, white);
      }
    }

    &.cart {
      position: relative;
      display: inline-block;
      width: 120px;
      height: 40px;
      line-height: 40px;
      margin-left: 15px;
      text-align: center;
      &:hover {
        .dropdown-toggle {
          background-color: map-get($colors, white);
          span {
            color: map-get($colors, primary);
          }
        }
        .dropdown-menu {
          height: 100px;
        }

        .icon.icon-cart {
          background: url("./../../public/imgs/icon-cart-hover.png") no-repeat
            center;
          background-size: contain;
        }
      }

      .dropdown-toggle {
        background-color: map-get($colors, dark-4);
        span {
          color: map-get($colors, gray-3);
          margin-right: 6px;
        }
      }

      .dropdown-menu {
        height: 0px;
        right: 0;
        top: 39px;
        width: 316px;
        line-height: 100px;
        text-align: center;
        background-color: map-get($colors, white);
        color: map-get($colors, primary);
      }
    }

    &.site {
      &:hover {
        .dropdown-menu {
          height: 100px;
        }
      }
      .dropdown-menu {
        width: 100%;
        left: 0;
        top: 100px;
        text-align: center;
        background-color: map-get($colors, black);
        color: map-get($colors, primary);
      }
    }
  }
}
</style>
