<template>
  <header class="header">
    <div class="header-topbar bg-dark-3 text-gray-3 fs-12">
      <div class="container clearfix">
        <div class="topbar-nav nav nav-top fl">
          <router-link to="/" class="nav-link">小米商城</router-link>
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
          <div v-if="user.username" class="d-inline-block dropdown user">
            <router-link class="dropdown-toggle" to="/user">{{
              user.username
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
            <span>|</span>
            <router-link class="px-5" to="/auth/register">注册</router-link>
            <span>|</span>
          </div>
          <a class="px-10" href="javascript:;">消息通知</a>
          <div v-if="user.username" class="d-inline-block">
            <span>|</span>
            <router-link class="px-10" to="/user/order">我的订单</router-link>
          </div>
          <div class="dropdown cart">
            <router-link to="/cart" class="dropdown-toggle"
              ><i class="icon icon-cart"></i><span>购物车</span
              ><span>({{ totalCount }})</span></router-link
            >
            <div v-if="!totalCount" class="dropdown-menu">
              <div>购物车中还没有商品，赶紧选购吧！</div>
            </div>
            <div v-else class="dropdown-menu">
              <div>您的购物车中有{{ totalCount }}件商品, 请前往查看！</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav text-dark-3 fs-16">
      <div class="container clearfix">
        <div class="logo logo-site fl">
          <router-link to="/"></router-link>
        </div>
        <div class="search fr">
          <form action="/">
            <input type="text" /><span class="icon icon-search"></span>
          </form>
        </div>
        <ul class="nav nav-site fr">
          <li
            v-for="(category, index) in siteCategories"
            :key="`category-${index}`"
            class="nav-item dropdown site"
          >
            <router-link :to="category.path" class="nav-link dropdown-toggle">{{
              category.name
            }}</router-link>
            <div class="dropdown-menu">
              <div class="wrap">
                <ul class="container clearfix text-center">
                  <li
                    v-for="(product, i) in category.productList"
                    :key="`product-${i}`"
                    class="fl"
                  >
                    <router-link
                      :to="`/products/buy/${product._id}`"
                      class="text-white"
                    >
                      <div class="cover">
                        <img
                          :src="product.cover"
                          :alt="product.name"
                          width="160"
                          height="110"
                        />
                      </div>
                      <div class="title text-dark-3 fs-12 lh-20 mt-14">
                        {{ product.title }}
                      </div>
                      <div class="price text-primary fs-12 lh-20">
                        {{ product.price }}元
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
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
import { logout } from "./../api/auth";
import { getProductList } from "./../api/product";

export default {
  name: "SiteHeader",

  computed: {
    ...mapState({
      user: state => state.auth.user,
      totalCount: state => state.cart.cart.totalCount,
      // cartItems: state => state.cart.cart.items,
    }),
  },
  data() {
    return {
      siteCategories: [
        { name: "小米手机", path: "/" },
        { name: "Redmi 红米", path: "/" },
        { name: "电视", path: "/" },
        { name: "笔记本", path: "/" },
        { name: "家电", path: "/" },
        { name: "路由器", path: "/" },
        { name: "智能硬件", path: "/" },
      ],
    };
  },
  methods: {
    logout,
    getCart() {
      if (storage.getItem("auth", "token")) {
        this.$store.dispatch("cart/getCart");
      }
    },
    async getSiteProducts() {
      const res = await getProductList({
        query: {
          tag: "site",
          productId: [110000, 120000, 440000, 300000, 400000, 500000, 600000],
          limit: 6,
        },
      });
      this.siteCategories = this.siteCategories.map((item, index) => {
        return {
          name: item.name,
          path: `/category/${res.data[index]._id}`,
          productList: res.data[index].productList,
        };
      });
    },
  },

  mounted() {
    this.getCart();
    this.getSiteProducts();
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
  }

  .dropdown {
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
          height: 230px;
        }
      }
      .dropdown-menu {
        width: 100%;
        left: 0;
        top: 100px;
        text-align: center;
        background-color: map-get($colors, white);
        color: map-get($colors, primary);
        .wrap {
          border-top: 1px solid map-get($colors, gray-1);
        }
        ul {
          padding: 40px 0 0 0;
        }
        li {
          width: 16.666%;
          @include sde(1px, 100px, map-get($colors, gray-1), 0, 0);
          &:last-child:after {
            width: 0;
          }
          a {
            display: block;
          }
        }
      }
    }
  }
}
</style>
