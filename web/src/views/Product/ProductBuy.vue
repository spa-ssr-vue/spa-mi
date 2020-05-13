<template>
  <div class="product">
    <div class="product-nav">
      <div class="container clearfix">
        <div class="fl name fs-18">{{ product.name }}</div>
        <div class="fr nav nav-product">
          <a class="nav-link" href="javascript:;">概述</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">参数</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">F码通道</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">咨询客服</a>
          <span>|</span>
          <a class="nav-link" href="javascript:;">用户评价</a>
        </div>
      </div>
    </div>
    <div v-if="!user.username" class="tips">
      <span class="mr-5">为方便您购买，请提前登陆</span>
      <router-link to="/auth/login" class="text-primary ml-20"
        >立即登陆</router-link
      >
    </div>
    <div class="product-detail container clearfix">
      <div class="fl banner">
        <swiper class="swiper swiper-product" :options="swiperOptions">
          <swiper-slide
            v-for="(item, index) in banner.items"
            :key="`swiper-banner-${index}`"
          >
            <router-link :to="`/products/buy/${item.product}`"
              ><img :src="item.imgUrl" alt=""
            /></router-link>
          </swiper-slide>
          <div
            v-if="banner.items.length !== 1"
            class="swiper-pagination"
            slot="pagination"
          ></div>
          <div
            v-if="banner.items.length !== 1"
            class="swiper-button-prev"
          ></div>
          <div
            v-if="banner.items.length !== 1"
            class="swiper-button-next"
          ></div>
        </swiper>
      </div>
      <div class="fr detail">
        <h1 class="fs-24">{{ product.name }}</h1>
        <p class="text-gray-3">{{ product.desc }}</p>
        <p class="mt-14 text-primary">小米自营</p>
        <p class="fs-18 text-primary pt-10 pb-20">{{ product.price }}元</p>
        <el-button
          class="btn btn-primay"
          type="primary"
          @click.native.prevent="addCart"
          >加入购物车</el-button
        >
      </div>
    </div>
    <div class="product-p-desc">
      <div class="container">
        <div class="desc fs-22">价格说明</div>
        <div>
          <img
            src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { storage } from "./../../utils";
import { addCartItem, getCartItem, putCartItem } from "./../../api/cart";
import { getProduct } from "./../../api/product";

export default {
  name: "ProductBuy",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      product: {},
      banner: {
        items: [],
      },
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
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
  },
  methods: {
    async addCart() {
      await addCartItem({
        productId: this.id,
        product: this.product,
      });

      this.$store.dispatch("cart/getCart");
    },

    async getProductDetail() {
      const res = await getProduct(this.id);
      const { product = {}, banner = {} } = res.data;
      this.product = product;
      this.banner = Object.assign({}, this.banner, banner);
    },
  },

  created() {
    this.getProductDetail();
  },
  mounted() {
    document.documentElement.scrollTo({
      top: 140,
      behavior: "smooth",
    });
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";

.product {
  .product-nav {
    height: 63px;
    // line-height: 63px;
    border-top: 1px solid map-get($colors, gray-1);
    border-bottom: 1px solid map-get($colors, gray-1);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);

    .name {
      color: #212121;
      font-weight: 400;
      line-height: 60px;
    }
  }

  .product-detail {
    padding: 32px 0 12px 0;
    .banner {
      width: 606px;
      height: 600px;
      padding-right: 46px;
    }

    .detail {
      width: 606px;
    }
  }

  .product-p-desc {
    padding-bottom: 50px;
    background-color: #f5f5f5;
    .desc {
      padding: 22px;
    }

    img {
      width: 100%;
    }
  }

  .tips {
    text-align: center;
    height: 48px;
    line-height: 48px;
    color: map-get($colors, dark-3);
    background-color: #f7f7f7;
  }
}

.nav {
  &.nav-product {
    line-height: 55px;
    .nav-link {
      color: #616161;
      &:hover {
        color: map-get($colors, primary);
      }
    }
    span {
      color: map-get($colors, gray-1);
      margin: 0 7.5px;
    }
  }
}
</style>
