<template>
  <div class="login">
    <div class="login-header">
      <h1><router-link to="/"></router-link></h1>
    </div>
    <div class="login-body">
      <el-card class="card" :body-style="{ padding: '0px' }">
        <div class="card-header" slot="header">
          <h2 class="text-primary fs-24 fw-500">账号登录</h2>
        </div>
        <div class="card-body">
          <el-form :model="model" ref="form" @submit.native.prevent="login">
            <el-form-item>
              <el-input v-model="model.username" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="model.password"
                type="password"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="btn btn-login"
                type="primary"
                native-type="submit"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
          <div class="clearfix">
            <router-link class="fl text-primary" to="/auth/register"
              >手机短信登陆/注册</router-link
            >
            <div class="fr text-gray-8">
              <router-link to="/auth/register">立即注册</router-link>
              <span class="px-5">|</span
              ><router-link to="/auth/reset">忘记密码?</router-link>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { storage } from "@/utils";
import { login } from "@/api/auth";

export default {
  name: "AuthLogin",
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const unLength = this.model.username.trim().length;
      const pwLength = this.model.password.trim().length;
      if (unLength === 0 || unLength < 4 || unLength > 16) {
        return this.$message({
          type: "warning",
          message: "请填写4-16位用户名",
        });
      }
      if (pwLength === 0 || pwLength < 4 || pwLength > 16) {
        return this.$message({
          type: "warning",
          message: "请填写4-16位密码",
        });
      }
      const res = await login(this.model);
      this.$message({
        type: "success",
        message: res.message,
      });
      const token = res.data.token;
      const user = res.data.user;
      storage.setItem("auth", "token", token);
      storage.setItem("auth", "user", user);
      this.$store.commit("auth/setUser", {
        token,
        user,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";
.login {
  .login-header {
    width: 1130px;
    margin: 0 auto;
    height: 98px;
    a {
      display: inline-block;
      @include bgImg(200px, 98px, "./../../../public/imgs/mistore_logo.png");
    }
  }

  .login-body {
    height: 588px;
    position: relative;
    .card {
      width: 410px;
      height: 405px;
      position: absolute;
      top: 40px;
      right: 100px;
      .card-header {
        text-align: left;
        margin: 0 0 0 40px;
      }
      .card-body {
        margin: 14px 31px 0 31px;
      }

      .el-form-item {
        margin: 0;
        padding: 0;
        margin-bottom: 14px;
        .el-input__inner {
          width: 100%;
          height: 48px;
          padding: 13px 16px 13px 14px;
        }
      }
      .el-card__header {
        border-bottom: none;
      }
    }
  }
}
</style>
