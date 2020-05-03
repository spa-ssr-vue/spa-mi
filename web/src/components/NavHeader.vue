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
          <a class="px-5" href="javascript:;">登录</a>
          <span class="">|</span>
          <a class=" px-5" href="javascript:;">注册</a>
          <span class="">|</span>
          <a class=" px-10" href="javascript:;">消息通知</a>
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
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">小米手机</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">Redmi 红米</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">电视</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">笔记本</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">家电</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">路由器</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">智能硬件</a>
            <div class="dropdown-menu">zzzz</div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">服务</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:;">社区</a>
          </li>
        </ul>
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
    .nav-item {
      float: left;
      padding: 0 10px;
    }

    width: 650px;
    margin-right: 40px;
    .dropdown {
      .dropdown-menu {
        width: 100%;
        height: 100px;
        left: 0;
        top: 100px;
        text-align: center;
        background-color: map-get($colors, black);
        color: map-get($colors, primary);
      }
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
      // display: block;
      height: 0px;
      right: 0;
      top: 40px;
      width: 316px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background-color: map-get($colors, white);
      color: map-get($colors, primary);
      // transition: all 0.2s;
    }
  }
}
</style>
