<template>
  <header class="header">
    <div class="header-topbar bg-bg text-gray-3 fs-12">
      <div class="container clearfix">
        <div class="topbar-nav fl">
          <a href="javascript:;">小米商城</a>
          <span>|</span>
          <a href="javascript:;">MIUI</a>
          <span>|</span>
          <a href="javascript:;">IoT</a>
          <span>|</span>
          <a href="javascript:;">云服务</a>
          <span>|</span>
          <a href="javascript:;">金融</a>
          <span>|</span>
          <a href="javascript:;">有品</a>
          <span>|</span>
          <a href="javascript:;">小爱开放平台</a>
          <span>|</span>
          <a href="javascript:;">企业团购</a>
          <span>|</span>
          <a href="javascript:;">资质证照</a>
          <span>|</span>
          <a href="javascript:;">协议规则</a>
          <span>|</span>
          <a href="javascript:;">下载app</a>
          <span>|</span>
          <a href="javascript:;">Select Location</a>
        </div>
        <div class="topbar-cart fr">
          <a href=""><i>icon</i><span>购物车</span><span>(0)</span></a>
          <div class="cart-menu d-none">
            购物车中还没有商品，赶紧选购吧！
          </div>
        </div>
        <div class="topbar-info fr">
          <a class="px-5" href="javascript:;">登录</a>
          <span>|</span>
          <a class="px-5" href="javascript:;">注册</a>
          <span>|</span>
          <a class="px-10" href="javascript:;">消息通知</a>
        </div>
      </div>
    </div>
    <div class="header-nav clearfix text-dark-3 fs-16">
      <div class="container">
        <div class="logo fl">logo</div>
        <div class="search fr"><input type="text" /><span>search</span></div>
        <div class="nav nav-site fr">
          <ul>
            <li><a href="javascript"></a></li>
          </ul>
          <a href="javascript:;">小米手机</a>
          <a href="javascript:;">Redmi 红米</a>
          <a href="javascript:;">电视</a>
          <a href="javascript:;">笔记本</a>
          <a href="javascript:;">家电</a>
          <a href="javascript:;">路由器</a>
          <a href="javascript:;">智能硬件</a>
          <a href="javascript:;">服务</a>
          <a href="javascript:;">社区</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style lang="scss">
@import "./../assets/scss/helper/_variables.scss";
.header {
  .header-topbar {
    height: 40px;
    line-height: 40px;
    a {
      display: inline-block;
      &:hover {
        color: #fff;
      }
    }

    .topbar-nav,
    .topbar-info {
      span {
        color: #424242;
      }
    }

    .topbar-nav {
      span {
        margin: 0 7px;
      }
    }

    .topbar-cart {
      margin-left: 15px;
      text-align: center;
      position: relative;
      &:hover {
        a {
          color: map-get($colors, primary);
          background-color: #fff;
        }
        .cart-menu {
          display: block;
          background-color: #fff !important;
        }
      }
      a {
        width: 120px;
        height: 40px;
      }

      .cart-menu {
        position: absolute;
        right: 0;
        top: 45px;
        z-index: 99;
        width: 316px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #fff !important;
      }
    }
  }

  .header-nav {
    height: 100px;
    line-height: 100px;
    a {
      float: left;
      padding: 0 10px;
    }

    .nav {
      width: 850px;
      position: relative;
      left: 150px;
    }

    .search {
      width: 296px;
      input {
        width: 245px;
        height: 50px;
      }
      span {
        display: inline-block;
        width: 40px;
        padding: 1px 6px;
        height: 50px;
      }
    }
  }
}
</style>
