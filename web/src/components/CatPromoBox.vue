<template>
  <div>
    <div class="container">
      <div class="box-banner">
        <router-link to="`/products/buy/${item.product}`"
          ><img :src="category.boxBanner.imgUrl" alt=""
        /></router-link>
      </div>
      <div class="card card-box ">
        <div class="card-header">
          <h2>{{ category.name }}</h2>
          <div class="more">查看更多</div>
        </div>
        <div class="card-body list list-box clearfix">
          <div
            v-if="category.banner.items.length === 1"
            class="list-item banner"
          >
            <router-link to="/"
              ><img :src="category.banner.items[0].imgUrl" width="100" alt=""
            /></router-link>
          </div>
          <div v-else class="list-item banner-wrap">
            <div
              v-for="(item, index) in category.banner.items"
              :key="index"
              class="banner-item"
            >
              <router-link to="/"
                ><img :src="item.imgUrl" width="100" alt=""
              /></router-link>
            </div>
          </div>

          <div class="list-item promo">
            <ul
              class="list list-sub clearfix"
              :class="category.name === '手机' ? '' : 'promo-s'"
            >
              <li
                v-for="(product, index) in category.productList"
                :key="`promo-product-${index}`"
                class="list-item text-center"
              >
                <a class="list-link" href="/"
                  ><img :src="product.cover" alt="" />
                  <div class="info">
                    <h3 class="name">{{ product.name }}</h3>
                    <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                    <p class="price">{{ product.price }}元</p>
                  </div>
                </a>
              </li>
              <li
                v-if="category.banner.items.length === 2"
                class="list-item more"
              >
                <router-link to="/" class="list-link clearfix">
                  <div class="fl hot">
                    <p class="fs-18 text-drak-3">浏览更多</p>
                    <p class="fs-12 text-gray-7">热门</p>
                  </div>
                  <div class="fr fs-18 icon">icon</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatPromoBox",
  props: {
    category: {
      name: "",
      banner: {
        items: [],
      },
      boxBanner: {
        imgUrl: "",
      },
      productList: [],
    },
  },
};
</script>

<style lang="scss">
.promo-s {
  .list-item {
    position: relative;
    &:nth-last-of-type(2) {
      float: left !important;
      height: 143px !important;
      padding: 0 !important;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .info {
        width: 100px;
        height: 80px;
        position: absolute;
        top: 50%;
        transform: translate(40px, -50%);
        text-align: left;
        .name {
          font-size: 14px;
          font-weight: 400;
          margin: 5px 0;
        }
        .desc {
          display: none;
        }
        .price {
          font-size: 12px;
          margin: 0 !important;
        }
      }
      img {
        position: absolute;
        top: 50%;
        transform: translate(10px, -50%);
        height: 80px !important;
        width: 80px !important;
        margin: 0 !important;
      }
    }
  }
  .more {
    float: left !important;
    height: 143px !important;
    margin: 0 0 14px 14px !important;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
    .hot {
      transform: translate(40px, 30px);
    }
    .icon {
      transform: translate(-40px, 30px);
    }
  }
}
</style>
