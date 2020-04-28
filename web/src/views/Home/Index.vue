<template>
  <div class="index">
    <div class="index-swiper container">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide>
          <img src="./../../../public/imgs/slider/slide-1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./../../../public/imgs/slider/slide-2.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./../../../public/imgs/slider/slide-3.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./../../../public/imgs/slider/slide-4.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./../../../public/imgs/slider/slide-5.jpg" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
      <nav>
        <ul class="nav nav-aside text-white fs-14">
          <li class="nav-item" v-for="n in 10" :key="n">
            <a class="nav-link" href="#">手机 电话卡</a>
            <div class="nav-menu d-none">
              我是第
              <h3>{{ n }}</h3>
              个aside nav hover 出来的
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      bannar: {},
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
          clickable: true,
        },
      },
    };
  },
  created() {},
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper/_variables.scss";

.index {
  .index-swiper {
    position: relative;
    height: 460px;
    img {
      width: 100%;
    }

    .swiper-container {
      width: 100%;
    }

    .swiper-pagination {
      left: auto;
      right: 30px;
      bottom: 20px;
      text-align: right !important;
      .swiper-pagination-bullet {
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background-color: hsla(0, 0%, 100%, 0.4);
          // opacity: 0;
        }
      }
    }

    .swiper-button-prev {
      left: 234px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      // color: #ddd;
    }
  }

  nav {
    width: 234px;
    height: 460px;
    padding: 20px 0;
    background-color: rgba(105, 101, 101, 0.6);
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
        display: block;
      }

      &:hover {
        background-color: map-get($colors, primary);
        .nav-menu {
          position: absolute;
          top: 0;
          left: 234px;
          width: 500px;
          height: 460px;
          background-color: #fff;
          display: block;
          color: mediumpurple;
        }
      }
    }
  }
}
</style>
