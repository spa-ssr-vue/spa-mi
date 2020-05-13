<template>
  <div class="cart bg-gray-4">
    <site-mini-header :title="info.title" :tips="info.tips"></site-mini-header>
    <div class="card card-cart bg-gray-4 fs-14 text-dark-4">
      <div class="container">
        <div class="card-header clearfix bg-white">
          <div class="check">
            <span
              class="icon icon-check mr-15 fs-14"
              :class="{ checked: cart.isSelectedAll }"
              @click="changeSelectedAll"
            ></span
            >全选
          </div>
          <div class="img" style="height:70px"></div>
          <div class="name">商品名称</div>
          <div class="price">单价</div>
          <div class="count">数量</div>
          <div class="total">小计</div>
          <div class="action">操作</div>
        </div>
        <div class="card-body product-list bg-white">
          <div
            v-for="(product, index) in cart.items"
            :key="`product-${index}`"
            class="product-item clearfix"
          >
            <div class="check">
              <span
                class="icon icon-check"
                :class="{ checked: product.selected }"
                @click="changeSelected(product._id)"
              ></span>
            </div>
            <div class="img">
              <router-link :to="`/product/${product._id}`"
                ><img :src="product.cover" alt=""
              /></router-link>
            </div>
            <div class="name">{{ product.name }}</div>
            <div class="price">{{ product.price }}</div>
            <div class="count">
              <span
                @click="add(product._id, product.count)"
                class="icon icon-plus"
                >+</span
              ><span
                ><input
                  v-model="product.count"
                  class="c"
                  style="width:40px;height:30px;text-align: center"
              /></span>
              <span
                @click="remove(product._id, product.count)"
                class="icon icon-subtract"
                >-</span
              >
            </div>
            <div class="total">{{ product.price * product.count }}</div>
            <div class="action">
              <span
                @click="removeItem(product._id)"
                class="icon icon-delete"
              ></span>
            </div>
          </div>
        </div>
        <div class="card-footer clearfix bg-white">
          <div class="fl text-gray-7">
            <router-link class="fl" to="/">继续购物</router-link>
            <span class="fl text-gray-1 mx-14">|</span>
            <span class="fl"
              >共
              <span class="text-primary">{{ cart.totalCount }}</span>
              件商品，已选择
              <span class="text-primary">{{ selectedCount }}</span> 件</span
            >
          </div>
          <div class="fr">
            <div class="fl text-primary totalCount">
              合计: <span>{{ cart.totalPrice }}</span
              >元
            </div>
            <div class="fl">
              <button @click.prevent="confirmOrder" class="btn btn-primary">
                去结算
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteMiniHeader from "./../../components/SiteMiniHeader";
import SiteFooter from "./../../components/SiteFooter";
import { mapState } from "vuex";
import {
  getCartItem,
  putSelected,
  putSelectedAll,
  deleteCartItem,
  putCount,
} from "../../api/cart";

export default {
  name: "Cart",
  components: {
    SiteMiniHeader,
    SiteFooter,
  },
  data() {
    return {
      info: {
        title: "我的购物车",
        tips: "温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算",
      },
    };
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
    }),
    selectedCount() {
      let count = 0;
      this.cart.items
        .slice()
        .filter(item => item.selected)
        .forEach(item => (count += item.count || 0));
      return count;
    },
  },
  methods: {
    async getCartInfo() {
      const res = await getCartItem();
      this.$store.commit("cart/setCart", res.data);
    },

    async removeItem(id) {
      await this.$confirm("确定要删除该商品?");
      await deleteCartItem(id);
      await this.getCartInfo();
    },

    async changeSelected(cardItemId) {
      await putSelected(cardItemId);
      await this.getCartInfo();
    },
    async changeSelectedAll() {
      await putSelectedAll();
      await this.getCartInfo();
    },
    async add(id, count) {
      await putCount(id, {
        count: 1,
      });
      await this.getCartInfo();
    },
    async remove(id, count) {
      if (count <= 1) {
        this.$message({
          type: "warning",
          message: "至少添加1件",
        });
        return;
      }
      await putCount(id, {
        count: -1,
      });
      await this.getCartInfo();
    },

    confirmOrder() {
      if (this.selectedCount === 0) {
        this.$message({
          type: "warning",
          message: "至少在购物车中选择一件",
        });
        return;
      }
      this.$router.push("/order/confirm");
    },
  },
  created() {
    this.getCartInfo();
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";

.cart {
  .card {
    &.card-cart {
      text-align: center;
      padding: 38px 0;
      .card-header {
        height: 70px;
        line-height: 70px;
        > div {
          float: left;
          font-size: 14px !important;
        }
      }

      .card-body {
        &.product-list {
          .product-item {
            padding: 15px 26px 15px 0;
            border-top: 1px solid map-get($colors, gray-1);
            > div {
              // float: left;
              display: table-cell;
              vertical-align: middle;
            }
          }
        }

        .check {
          .icon {
            margin-left: -45px;
          }
        }

        .total {
          color: map-get($colors, primary);
        }
      }

      .card-footer {
        height: 50px;
        line-height: 50px;
        padding-left: 32px;
        margin: 20px 0;
        .totalCount {
          font-size: 14px;
          line-height: 50px;
          > span {
            font-size: 30px;
          }
        }
      }

      .card-header,
      .card-body {
        .check {
          width: 110px;
        }
        .img {
          width: 120px;
          padding-right: 40px;
          img {
            vertical-align: middle;
            width: 80px !important;
          }
        }
        .name {
          text-align: left;
          width: 380px;
          font-size: 18px;
        }
        .price {
          width: 158px;
          font-size: 16px;
        }
        .count {
          width: 150px;
          font-size: 16px;
          .c {
            display: inline-block;
            position: relative;
            top: -2.5px;
          }
        }
        .total {
          width: 201px;
          font-size: 16px;
        }
        .action {
          width: 80px;
          // margin-right: 26px;
        }
      }
    }
  }

  .btn {
    &.btn-primary {
      width: 202px;
      height: 50px;
      font-size: 18px;
      margin-left: 50px;
    }
  }
}
</style>
