<template>
  <main class="index bg-gray-4">
    <div class="index-swiper container p-relative">
      <swiper class="swiper swiper-home" :options="swiperOptions">
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
      <ul class="nav nav-aside text-white fs-14">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >手机 电话卡<span class="icon icon-nav-arrow"></span
          ></a>
          <div class="dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >电视 盒子<span class="icon icon-nav-arrow"></span
          ></a>
          <div class="dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >笔记本 显示器 平板<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >家电 插线板<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >出行 穿戴<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >智能 路由器<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >电源 配件<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >健康 儿童<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >耳机 音箱<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;"
            >生活 箱包<span class="icon icon-nav-arrow"></span
          ></a>
          <div class=" dropdown-menu">
            我是第 个aside nav hover 出来的
          </div>
        </li>
      </ul>
    </div>
    <div class="index-premo container list clearfix">
      <div class="list-item channel"></div>
      <div class="list-item premo">
        <ul class="list list-sub clearfix">
          <li class="list-item">
            <a class="list-link" href="#"
              ><img src="./../../../public/imgs/ads/zzzzz.png" alt=""
            /></a>
          </li>
          <li class="list-item">
            <a class="list-link" href="#"
              ><img src="./../../../public/imgs/ads/zzzzz.png" alt=""
            /></a>
          </li>
          <li class="list-item">
            <a class="list-link" href="#"
              ><img src="./../../../public/imgs/ads/zzzzz.png" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card mobile container">
      <div class="card-header">
        <h2>手机</h2>
        <div class="more">查看更多</div>
      </div>
      <div class="card-body list clearfix">
        <div class="list-item">1</div>
        <div class="list-item premo">
          <ul class="list list-sub clearfix">
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
          </ul>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
    <div class="card mobile container bfc">
      <div class="card-header">
        <h2>手机</h2>
        <div class="more">查看更多</div>
      </div>
      <div class="card-body list clearfix">
        <div class="list-item">1</div>
        <div class="list-item premo">
          <ul class="list list-sub clearfix">
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
            <li class="list-item"><a class="list-link" href="/">1</a></li>
          </ul>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
    <div class="t">
      <span></span>
    </div>
  </main>
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
        },
      },
    };
  },
  created() {},
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";

.index {
  .index-swiper {
    height: 460px;
  }

  .index-premo {
    margin-top: 14px;
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

      .dropdown {
        .dropdown-menu {
          position: absolute;
          top: 0;
          left: 234px;
          width: 500px;
          height: 460px;
          background-color: #fff;
          color: mediumpurple;
        }
      }
    }
  }

  .list {
    .premo {
      width: 978px;
      margin-left: 14px;
    }
    &.index-premo {
      .channel,
      .premo {
        height: 170px;
      }

      .channel {
        width: 234px;
        background-color: lawngreen;
      }

      .list-sub {
        .list-item {
          img {
            width: 316px;
            height: 170px;
          }
        }
      }
    }

    &.list-sub {
      .list-item {
        margin-left: 14px;
        &:nth-of-type(4n + 1) {
          margin-left: 0px;
        }
      }
    }
  }

  .card {
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
      &.list {
        > div:nth-of-type(1) {
          width: 234px;
          height: 614px;
          margin-bottom: 14px;
          background-color: lawngreen;
        }

        .list-sub {
          .list-item {
            width: 234px;
            height: 300px;
            margin-bottom: 14px;
            background-color: lightcoral;
          }
        }
      }
    }

    .card-footer {
      height: 120px;
      margin: 22px 0;
      background: lightgreen;
    }
  }

  // margin-bottom: 20px;
}
</style>
