<template>
  <div>
    <site-mini-header title="确认订单"></site-mini-header>
    <div class="order-confirm bg-gray-4">
      <div class="container bg-white">
        <div class="order-address bg-white">
          <div class="card card-address">
            <div class="card-header">
              收货地址
            </div>
            <div class="card-body list clearfix">
              <div
                v-for="(addrItem, index) in addresses"
                :key="`address-${index}`"
                @click="selecteAddress(addrItem, index)"
                class="list-item"
                :class="{ checked: i === index }"
              >
                <div class="name">{{ addrItem.name }}</div>
                <div class="phone">{{ addrItem.phone }}</div>
                <p class="addr">{{ addrItem.addr }}</p>
                <div @click.stop="showDialog(addrItem)" class="action">
                  修改
                </div>
              </div>
            </div>
            <div @click="fetchUserAddress" class="card-more fs-14 text-dark4">
              显示更多收获地址
            </div>
          </div>
        </div>
        <div class="order-product bg-white">
          <div class="card card-product">
            <div class="card-header">
              商品及优惠券
            </div>
            <div class="card-body">
              <div
                v-for="(product, index) in orderItems"
                :key="`product-${index}`"
                class="product-item"
              >
                <div class="img">
                  <img :src="product.cover" alt="" width="30" />
                </div>
                <div class="name">{{ product.name }}</div>
                <div class="price">
                  {{ product.price }}元×{{ product.count }}
                </div>
                <div class="status">0</div>
                <div class="total">{{ product.price * product.count }}元</div>
              </div>
            </div>
          </div>
        </div>
        <div class="order-deliver"></div>
        <div class="order-total">
          <div class="bill">
            <span class="bill-name">商品件数：</span
            ><span class="bill-item">{{ totalCount }}件</span>
          </div>
          <div class="bill">
            <span class="bill-name">商品总价：</span
            ><span class="bill-item">{{ totalPrice }}元</span>
          </div>
          <div class="bill">
            <span class="bill-name">活动优惠：</span
            ><span class="bill-item">-0元</span>
          </div>
          <div class="bill">
            <span class="bill-name">优惠券抵扣：</span
            ><span class="bill-item">-0元</span>
          </div>
          <div class="bill">
            <span class="bill-name">运费：</span
            ><span class="bill-item">0元</span>
          </div>
          <div class="bill">
            <span class="bill-name">应付总额：</span
            ><span class="bill-item"
              ><span>{{ payment }}</span
              >元</span
            >
          </div>
        </div>
        <div class="order-order clearfix bg-white">
          <div class="fl">
            <p>{{ address.name }}&nbsp;{{ address.phone }}</p>
            <p>{{ address.addr }}</p>
          </div>
          <div class="fr">
            <router-link to="/cart">
              <span class="btn btn-primary">返回购物车</span></router-link
            >
            <span @click="order" class="btn btn-primary">立即下单</span>
          </div>
        </div>
      </div>
      <div class="dialog" :class="{ show: isShowDialog }">
        <div class="mask"></div>
        <div class="content">
          <div class="title">修改收货人地址</div>
          <el-form
            :model="address"
            ref="form"
            label-width="120px"
            @submit.native.prevent="modifyAddress"
          >
            <el-form-item label="收货人姓名">
              <el-input v-model="address.name"></el-input>
            </el-form-item>
            <el-form-item label="收货人电话">
              <el-input v-model="address.phone"></el-input>
            </el-form-item>
            <el-form-item label="收货人地址">
              <el-input v-model="address.addr" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" native-type="submit">修改</el-button>
              <el-button @click="isShowDialog = !isShowDialog" type="primary"
                >取消</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteMiniHeader from "./../../components/SiteMiniHeader";
import { mapState } from "vuex";
import { getUserAddress, putUserAddress } from "./../../api/address";
import { createOrder } from "./../../api/order";

export default {
  name: "OrderConfirm",
  components: {
    SiteMiniHeader,
  },
  data() {
    return {
      i: -1,
      address: {},
      addresses: [],
      query: {
        page: 1,
        limit: 4,
      },
      isShowDialog: false,
    };
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
    }),
    orderItems() {
      return this.cart.items.filter(item => item.selected);
    },
    totalCount() {
      let count = 0;
      this.orderItems.forEach(item => (count += item.count));
      return count;
    },
    totalPrice() {
      let price = 0;
      this.orderItems.forEach(item => (price += item.price * item.count));
      return price;
    },
    payment() {
      return this.totalPrice;
    },
  },
  methods: {
    async fetchUserAddress() {
      if (this.query.page > 5) {
        return this.$message({
          type: "warning",
          message: "地址加载已到达上限",
        });
      }
      this.query.page += 1;
      const res = await getUserAddress({
        query: this.query,
      });
      this.addresses = res.data;
    },
    selecteAddress(address, i) {
      this.address = JSON.parse(JSON.stringify(address));
      this.i = i;
    },
    showDialog(address) {
      this.address = JSON.parse(JSON.stringify(address));
      this.isShowDialog = true;
    },
    async modifyAddress() {
      await putUserAddress(this.address._id, this.address);
      this.isShowDialog = false;
      const res = await getUserAddress();
      this.addresses = res.data;
    },
    async order() {
      if (!this.address._id) {
        return this.$message({
          type: "warning",
          message: "地址不能为空",
        });
      }
      if (this.orderItems.length === 0) {
        return this.$message({
          type: "warning",
          message: "购物车不能为空",
        });
      }
      const res = await createOrder(this.address, this.orderItems);
      this.$router.push(`/order/pay/${res.data._id}`);
    },
  },
  created() {
    this.fetchUserAddress();
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";

.order-confirm {
  padding: 40px 0 60px 0;
  color: map-get($colors, dark-3);
  .container {
    padding: 48px 0 0 0;
  }

  .order-total {
    margin: 0 48px;
    .bill {
      text-align: right;
      color: map-get($colors, gray-7);
      line-height: 2;
      .bill-item {
        display: inline-block;
        width: 126px;
        color: map-get($colors, primary);
        span {
          font-size: 30px;
        }
      }
    }
  }

  .order-order {
    padding: 20px 48px;
    border-top: 2px solid map-get($colors, gray-4);
    margin-top: 10px;
    color: map-get($colors, dark-4);
  }

  .card {
    .card-header {
      font-size: 18px;
    }
    &.card-address {
      padding: 0 24px;
      .card-header {
        margin-bottom: 20px;
      }
      .card-body {
        color: map-get($colors, gray-7);
      }
      .card-more {
        height: 50px;
        line-height: 50px;
        margin-bottom: 30px;
        background-color: map-get($colors, gray-2);
        text-align: center;
        cursor: pointer;
      }
    }

    &.card-product {
      padding: 0 24px;
      .card-body {
        padding: 5px 0;
        border-bottom: 1px solid #e0e0e0;
        .product-item {
          padding: 10px 0;
          font-size: 14px;
          line-height: 30px;
          text-align: left;
          > div {
            display: inline-block;
            text-align: center;
          }
          .img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            img {
              vertical-align: middle;
            }
          }
          .name {
            width: 650px;
            text-align: left;
          }
          .price {
            width: 150px;
          }
          .status {
            width: 100px;
          }
          .total {
            width: 190px;
            color: map-get($colors, primary);
          }
        }
      }
    }
  }

  .list {
    .list-item {
      width: 270px;
      height: 180px;
      border: 1px solid map-get($colors, gray-1);
      margin: 0 17px 20px 0;
      padding: 15px 24px 0 24px;
      cursor: pointer;
      position: relative;
      &:hover {
        .action {
          display: block;
        }
      }

      &.checked {
        border-color: map-get($colors, primary);
        .action {
          display: block;
        }
      }

      .name {
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        font-size: 18px;
        color: map-get($colors, dark-3);
      }

      .phone {
        height: 20px;
      }

      .addr {
        line-height: 22px;
      }

      .action {
        position: absolute;
        right: 17px;
        bottom: 10px;
        text-align: right;
        color: map-get($colors, primary);
        display: none;
      }
    }
  }

  .dialog {
    .title {
      padding: 10px 0 10px 20px;
      font-size: 16px;
    }
    .content {
      width: 600px;
      padding: 20px 20px 0 0;
      background-color: map-get($colors, white);
    }
  }
}
</style>
