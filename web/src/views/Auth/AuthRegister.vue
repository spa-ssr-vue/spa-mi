<template>
  <div class="register bg-gray-9">
    <div class="wrap bg-white text-center">
      <div class="register-logo">
        <router-link class="icon icon-logo" to="/"></router-link>
      </div>
      <div class="register-title text-dark-3">
        <h4 class="fw-500">注册小米账号</h4>
      </div>
      <div class="register-form text-left">
        <el-form
          :model="model"
          ref="form"
          label-width="80px"
          label-position="top"
          @submit.native.prevent="register"
        >
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="model.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="model.password2" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              native-type="submit"
              class="btn btn-register"
              >立即注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="register-privacy">
        <p class="fs-14">
          已阅读并同意：小米<a href="javascript:;">用户协议</a> 和<a
            href="javascript:;"
            >隐私政策</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/auth";

export default {
  name: "AuthRegister",
  data() {
    return {
      model: {
        username: "",
        password: "",
        password2: "",
      },
    };
  },
  methods: {
    async register() {
      const unLength = this.model.username.trim().length;
      const pwLength = this.model.password.trim().length;
      const pw2Length = this.model.password2.trim().length;
      if (unLength === 0 || unLength < 4 || unLength > 16) {
        return this.$message({
          type: "warning",
          message: "请填写4-16位用户名",
        });
      }
      if (
        pwLength === 0 ||
        pwLength < 4 ||
        pwLength > 16 ||
        pw2Length === 0 ||
        pw2Length < 4 ||
        pw2Length > 16
      ) {
        return this.$message({
          type: "warning",
          message: "请填写4-16位密码",
        });
      }
      if (this.model.password !== this.model.password2) {
        return this.$message({
          type: "warning",
          message: "密码与确认密码不相同",
        });
      }
      const res = await register(this.model);
      this.$message({
        type: "success",
        message: res.message,
      });
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/helper";
.register {
  width: 100%;
  height: 100%;
  .wrap {
    width: 854px;
    margin: 0 auto;
  }

  .register-logo {
    height: 48px;
    margin: 0 0 40px 0;
  }
  .register-title {
    font-size: 30px;
  }
  .register-form {
    width: 332px;
    margin: 0 auto;
    padding: 30px 0;
  }
  .register-privacy {
    padding: 40px 0;
    color: #9d9d9d;
    a {
      color: map-get($colors, dark-3);
    }
  }

  .el-form {
    .el-form-item {
      margin-bottom: 4px;
      .el-form-item__label {
        height: 30px;
        left: 30px;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
