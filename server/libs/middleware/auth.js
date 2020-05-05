module.exports = config => {
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const User = require("../db/models/User");

  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    assert(token, 401, "请先登录");
    const { id = "" } = jwt.verify(token, req.app.get("SECRET"));
    assert(id, 401, "请先登录");
    const user = await User.findById(id);
    assert(user, 401, "请先登录");
    req.user = user;
    await next();
  };
};
