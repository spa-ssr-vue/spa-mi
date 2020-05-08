<template>
  <div class="user">
    <site-header></site-header>
    <div class="user-center bg-gray-4">
      <div class="container">
        <el-container>
          <el-aside width="234px">
            <el-menu router :default-openeds="opends">
              <el-submenu
                v-for="(item, index) in menu.items"
                :index="`${index + 1}`"
                :key="`item-index-${index}`"
              >
                <template slot="title">{{ item.title }}</template>
                <el-menu-item
                  v-for="(subItem, subIndex) in item.items"
                  :key="`subItem-subIndex-${subIndex}`"
                  :index="subItem.path"
                >
                  {{ subItem.name }}
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-container>
            <el-header class="text-center">
              <h2>个人中心</h2>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      opends: ["1", "2", "3", "4"],
      menu: {
        items: [
          {
            title: "订单中心",
            items: [
              { path: "/user/order", name: "我的订单" },
              { path: "/user/order", name: "团购晒单" },
            ],
          },
          {
            title: "个人中心",
            items: [
              { path: "/user/center", name: "我的个人中心" },
              { path: "/user/address", name: "收货地址" },
            ],
          },
          {
            title: "售后服务",
            items: [
              { path: "/user/service", name: "服务记录" },
              { path: "/user/service", name: "申请服务" },
            ],
          },
          {
            title: "账户管理",
            items: [
              { path: "/user/manager", name: "个人信息" },
              { path: "/user/manager", name: "修改密码" },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";

.user {
  .user-center {
    overflow: hidden;
    .container {
      margin: 20px 0 20px 20px;
    }
  }

  .el-header,
  .el-main {
    background-color: map-get($colors, white);
    margin-left: 20px;
  }

  .el-main {
    margin-top: 20px;
  }

  .el-aside {
    > .el-menu {
      text-align: left;
      padding: 36px 0;
      .el-submenu__title {
        color: map-get($colors, dark-3);
      }

      .el-menu-item {
        color: map-get($colors, gray-7);
      }
    }
  }
}
</style>
