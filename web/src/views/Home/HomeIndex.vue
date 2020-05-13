<template>
  <main class="index bg-white">
    <div class="index-swiper container p-relative">
      <swiper class="swiper swiper-home" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in swiperBanner.items"
          :key="`swiper-banner-${index}`"
        >
          <router-link :to="`/products/buy/${item.product}`"
            ><img :src="item.imgUrl" alt=""
          /></router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
      <ul class="nav nav-aside text-white fs-14">
        <li
          v-for="(category, index) in asideCategories"
          :key="`category-aside-${index}`"
          class="nav-item dropdown dropdown-aside"
        >
          <router-link class="nav-link dropdown-toggle" :to="category.path"
            >{{ category.name }}<span class="icon icon-nav-arrow"></span
          ></router-link>
          <div class="dropdown-menu">
            <ul class="list list-aside clearfix">
              <li
                v-for="(item, index) in category.items"
                :key="`cat-item-${index}`"
                class="list-item"
              >
                <router-link
                  v-for="(subItem, i) in item"
                  :key="`sub-item-${i}`"
                  class="list-link"
                  to="/"
                >
                  <img :src="subItem.thumbImg" alt="" /><span
                    class="name fs-14"
                    >{{ subItem.name }}</span
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-promo container list list-promo clearfix">
      <div class="list-item channel">
        <ul class="nav nav-channel clearfix">
          <li
            v-for="(channel, index) in promoChannels"
            :key="`channel-${index}`"
            class="nav-item"
          >
            <router-link to="/" class="nav-link"
              ><img :src="channel.imgUrl" alt="" />
              <h4 class="name">{{ channel.name }}</h4>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="list-item promo">
        <ul class="list list-sub clearfix">
          <li
            v-for="(item, index) in promoBanner.items"
            :key="`promo-banner-${index}`"
            class="list-item"
          >
            <router-link :to="`/products/buy/${item.product}`" class="list-link"
              ><img :src="item.imgUrl" alt=""
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-box bg-gray-4">
      <div
        v-for="(catItem, index) in promoCategories"
        :key="`category-${index}`"
      >
        <cat-promo-box :category="catItem"></cat-promo-box>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { chunk } from "lodash";
import { getBanner } from "./../../api/banner";
import { getProductList, getProduct } from "../../api/product";
import CatPromoBox from "./../../components/CatPromoBox";

export default {
  name: "HomeIndex",
  components: {
    CatPromoBox,
  },
  data() {
    return {
      swiperBanner: {
        items: [],
      },
      promoBanner: {
        items: [],
      },
      promoChannels: [
        {
          name: "小米秒杀",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48",
          path: "/",
        },
        {
          name: "企业团购",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48",
          path: "/",
        },
        {
          name: "F码通道",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48",
          path: "/",
        },
        {
          name: "米粉卡",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48",
          path: "/",
        },
        {
          name: "以旧换新",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48",
          path: "/",
        },
        {
          name: "话费充值",
          imgUrl:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48",
          path: "/",
        },
      ],
      promoCategories: [],
      asideCategories: [
        { name: "手机 电话卡", path: "/" },
        { name: "电视 盒子", path: "/" },
        { name: "笔记本 显示器 平板", path: "/" },
        { name: "家电 插线板", path: "/" },
        { name: "出行 穿戴", path: "/" },
        { name: "智能 路由器", path: "/" },
        { name: "电源 配件", path: "/" },
        { name: "健康 儿童", path: "/" },
        { name: "耳机 音箱", path: "/" },
        { name: "生活 箱包", path: "/" },
      ],
      swiperOptions: {
        loop: true,
        autoplay: { delay: 4000 },
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  methods: {
    async getBanner() {
      const res = await axios.all([getBanner(10001), getBanner(10002)]);
      this.swiperBanner = res[0].data;
      this.promoBanner = res[1].data;
    },

    async getCatProducts() {
      const res = await getProductList({
        query: {
          tag: "category",
          code: [440000],
          limit: 24,
        },
      });

      this.asideCategories = this.asideCategories.map((item, i) => {
        return {
          name: item.name,
          path: item.path,
          items: chunk(res.data[0].productList, 6),
        };
      });
    },

    async getBoxProducts() {
      const res = await axios.all([
        getBanner(10010),
        getProductList({
          query: {
            tag: "category",
            code: [100000, 400000],
            limit: 8,
          },
        }),
      ]);

      this.promoCategories = res[1].data.map((item, index) => ({
        name: item.name,
        banner: item.banner[0],
        boxBanner: res[0].data.items[index],
        productList: item.productList,
      }));
    },
  },
  created() {
    this.getBanner();
    this.getCatProducts();
    this.getBoxProducts();
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";

.index {
  .index-swiper {
    height: 460px;
  }

  .index-promo {
    margin-top: 14px;
  }

  .index-box {
    overflow: hidden;
    margin-top: 20px;
    .box-banner {
      height: 120px;
      margin: 22px 0;
      a {
        display: block;
        img {
          width: 100%;
        }
      }
    }
  }

  .promo {
    width: 978px;
    margin-left: 14px;
  }
}

.nav {
  &.nav-aside {
    width: 234px;
    height: 460px;
    padding: 20px 0;
    background-color: rgba(105, 101, 101, 0.6);
    color: map-get($colors, white);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    .nav-item {
      width: 234px;
      padding: 0 0 0 30px;
      height: 42px;
      line-height: 42px;
      .nav-link {
        position: relative;
      }

      &:hover {
        background-color: map-get($colors, primary);
        .nav-link {
          color: map-get($colors, white);
        }
      }
    }
  }

  &.nav-channel {
    background-color: map-get($colors, gray-5);
    padding: 3px;
    .nav-item {
      text-align: center;
      float: left;
      width: 70px;
      height: 82px;
      margin: 0 3px;
      @include sde(90%, 1px, #665e57, -1px, auto, auto, 5px);
      @include bsde(1px, 90%, #665e57, 5px, auto, auto, -3px);
      .nav-link {
        padding-top: 18px;
        font-size: 12px;
        opacity: 0.7;
        &:hover {
          color: map-get($colors, white);
          opacity: 1;
        }
      }

      img {
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
      }

      .name {
        color: map-get($colors, white);
        font-weight: 400;
      }
    }
  }
}

.dropdown {
  &.dropdown-aside {
    &:hover {
      .dropdown-menu {
        display: block;
      }
    }
    .dropdown-menu {
      position: absolute;
      top: 0;
      left: 234px;
      height: 460px;
      background-color: #fff;
      display: none;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
    }
  }
}

.list {
  &.list-promo {
    .channel,
    .promo {
      height: 170px;
    }

    .channel {
      width: 234px;
    }

    .list-sub {
      .list-item {
        margin-left: 14px;
        &:first-child {
          margin-left: 0px;
        }
        img {
          width: 316px;
          height: 170px;
        }
      }
    }
  }

  &.list-box {
    > div:nth-of-type(1) {
      width: 234px;
      height: 614px;
      margin-bottom: 14px;
    }

    .list-item,
    .banner-item {
      transition: all 0.4s;
    }

    .banner,
    .banner-item {
      &:hover {
        transform: translateY(-5px);
      }
    }

    .list-sub {
      .list-item {
        width: 234px;
        height: 300px;
        padding: 20px 0;
        margin-left: 14px;
        margin-bottom: 14px;
        background: map-get($colors, white);
        &:hover {
          transform: translateY(-5px);
        }
        &:nth-of-type(4n + 1) {
          margin-left: 0px;
        }

        img {
          width: 160px;
          margin: 0 37px 18px 37px;
        }
      }

      .name {
        margin: 0 10px 2px 10px;
        color: map-get($colors, dark-3);
        font-weight: 300px;
      }

      .desc {
        margin: 0 10px 10px 10px;
        font-size: 12px;
        color: map-get($colors, gray-3);
      }

      .price {
        margin: 0 10px 14px 10px;
        color: map-get($colors, primary);
      }
    }
  }

  &.list-aside {
    width: 992px;
    .list-item {
      width: 234px;
      height: 460px;
      padding: 2px 0;
      margin-left: 14px;
      a {
        width: 265px;
        height: 76px;
        line-height: 76px;
      }
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 12px;
      }

      .name {
        display: inline-block;
        line-height: 40px;
        color: map-get($colors, dark-3);
      }
    }
  }
}

.card {
  &.card-box {
    .card-header {
      height: 58px;
      line-height: 58px;
      position: relative;

      h2 {
        font-size: 22px;
        font-weight: 200;
        color: #333;
      }

      .more {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .card-body {
      .banner,
      .banner-wrap {
        a {
          display: block;
          img {
            width: 100%;
          }
        }
      }

      .banner-item {
        height: 300px;
        margin: 0 0 14px 14px;
        overflow: hidden;
      }
    }
  }
}
</style>
