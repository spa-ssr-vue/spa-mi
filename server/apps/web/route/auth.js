module.exports = app => {
  const express = require("express");
  const jwt = require("jsonwebtoken");
  const bcrypt = require("bcryptjs");
  const assert = require("http-assert");

  const router = express.Router({
    mergeParams: true,
  });
  const User = require("./../../../libs/db/models/User");
  const authMiddleware = require("./../../../libs/middleware/auth")();

  router.post("/register", async (req, res) => {
    let { username, password } = req.body;
    username = username.trim();
    password = password.trim();
    const user = await User.findOne({ username });
    assert(!user, 422, "用户已存在");
    const item = await User.create({ username, password });
    res.send({
      code: 0,
      message: "注册成功",
      data: {
        user: { username: item.username },
      },
    });
  });

  router.post("/login", async (req, res) => {
    let { username, password } = req.body;
    username = username.trim();
    password = password.trim();
    // 查找用户
    const user = await User.findOne({ username }).select("+password");
    assert(user, 422, "用户名不正确");
    // 验证密码
    const isValidPw = bcrypt.compareSync(password, user.password);
    assert(isValidPw, 422, "密码不正确");
    // 返回token
    const token = jwt.sign({ id: user._id }, app.get("SECRET"));
    res.send({
      code: 0,
      message: "登录成功",
      data: {
        token,
        user: { username },
      },
    });
  });

  router.post("/reset", async (req, res) => {
    res.send({
      code: 0,
      message: "密码重置成功",
      data: {},
    });
  });

  router.get("/user", authMiddleware, async (req, res) => {
    res.send({
      code: 0,
      message: "请求成功",
      data: {
        user: req.user,
      },
    });
  });

  app.use("/web/api/auth", router);
};
