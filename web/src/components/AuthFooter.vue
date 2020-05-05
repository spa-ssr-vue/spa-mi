<template>
  <div class="footer auth">
    <div class="footer-links">
      <a href="javascrip:;">简体</a>
      <span>|</span>
      <a href="javascrip:;">繁体</a>
      <span>|</span>
      <a href="javascrip:;">English</a>
      <span>|</span>
      <a href="javascrip:;">常见问题</a>
      <span v-if="type === 'login'">|</span>
      <a v-if="type === 'login'" href="javascrip:;">隐私政策</a>
    </div>
    <p class="footer-permit" :class="type === 'register' ? 'register' : ''">
      小米公司版权所有-京ICP备10046444-
      <img src="./../../public/imgs/ghs.png" alt="" />
      <a href="javascript:;">京公网安备11010802020134号</a>-京ICP证110507号
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "login" },
  },
  name: "AuthFooter",
};
</script>

<style lang="scss">
.footer {
  &.auth {
    height: 88px;
    text-align: center;
    font-size: 14px;
    overflow: hidden;
    .footer-links {
      a {
        padding: 0 10px;
        color: #757575;
        &:hover {
          color: #333;
        }
      }
    }
    .footer-permit {
      padding: 10px 0;
      color: #757575;
      line-height: 24px;
      &.register {
        color: #9d9d9d;
      }
      img {
        position: relative;
        bottom: 3px;
        margin: 0 -3px;
      }
      a:hover {
        color: #9d9d9d;
      }
    }
  }
}
</style>
